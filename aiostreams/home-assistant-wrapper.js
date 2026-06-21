import { mkdir, readFile, writeFile } from "node:fs/promises";
import { randomBytes } from "node:crypto";
import { join } from "node:path";

const dataDirectory = "/app/data";
// `config.yaml` maps the add-on's persistent data volume to `/app/data`.
// Home Assistant stores the add-on configuration in that volume as options.json.
const optionsPath = join(dataDirectory, "options.json");
const secretPath = join(dataDirectory, ".aiostreams-secret-key");
const secretPattern = /^[0-9a-f]{64}$/i;

async function readOptions() {
  try {
    return JSON.parse(await readFile(optionsPath, "utf8"));
  } catch (error) {
    console.error(`Unable to read Home Assistant options from ${optionsPath}:`, error);
    process.exit(1);
  }
}

async function loadSecret() {
  try {
    const secret = (await readFile(secretPath, "utf8")).trim();
    if (secretPattern.test(secret)) {
      return secret;
    }
    console.warn("Ignoring invalid persisted AIOStreams secret; generating a new one.");
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error(`Unable to read AIOStreams secret from ${secretPath}:`, error);
      process.exit(1);
    }
  }

  const secret = randomBytes(32).toString("hex");
  await writeFile(secretPath, `${secret}\n`, { mode: 0o600 });
  return secret;
}

const options = await readOptions();
const baseUrl = options.BASE_URL?.trim();

if (!baseUrl) {
  console.error("BASE_URL is required. Set it to AIOStreams' externally reachable URL in the add-on configuration.");
  process.exit(1);
}

try {
  const url = new URL(baseUrl);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("URL must use HTTP or HTTPS");
  }
} catch (error) {
  console.error(`BASE_URL must be a valid HTTP(S) URL: ${error.message}`);
  process.exit(1);
}

await mkdir(dataDirectory, { recursive: true });
process.env.BASE_URL = baseUrl;
process.env.DATABASE_URI = options.DATABASE_URI?.trim() || "sqlite://./data/db.sqlite";
process.env.SECRET_KEY = await loadSecret();

for (const name of [
  "AIOSTREAMS_AUTH",
  "AIOSTREAMS_AUTH_ADMINS",
  "AIOSTREAMS_AUTH_PROXY",
  "LOG_LEVEL",
]) {
  const value = options[name]?.trim();
  if (value) {
    process.env[name] = value;
  }
}

await import("/app/packages/server/dist/server.js");

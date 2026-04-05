import type { NextConfig } from "next";
import * as fs from "fs";
import * as path from "path";

function parseEnvLocal(): Record<string, string> {
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), ".env.local"), "utf8");
    return Object.fromEntries(
      raw.split("\n")
        .filter((l) => l.includes("=") && !l.startsWith("#"))
        .map((l) => {
          const idx = l.indexOf("=");
          return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
        })
    );
  } catch {
    return {};
  }
}

const envLocal = parseEnvLocal();
const e = (key: string) => process.env[key] || envLocal[key] || "";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@anthropic-ai/sdk", "stripe"],
  env: {
    ANTHROPIC_API_KEY: e("ANTHROPIC_API_KEY"),
    STRIPE_SECRET_KEY: e("STRIPE_SECRET_KEY"),
    STRIPE_WEBHOOK_SECRET: e("STRIPE_WEBHOOK_SECRET"),
    STRIPE_PRO_PRICE_ID: e("STRIPE_PRO_PRICE_ID"),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: e("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"),
  },
};

export default nextConfig;

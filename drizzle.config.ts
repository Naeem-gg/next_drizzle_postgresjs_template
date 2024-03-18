import "./env.config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://postgres:Navjivan@0.0.0.0:5432/drizzledb",
  },
  verbose: true,
  strict: true,
});
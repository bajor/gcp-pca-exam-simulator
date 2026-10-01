import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: [
      "scripts/verify-sources.test.ts",
      "scripts/create-review-record.integration.test.ts",
      "src/**/*.integration.test.{ts,tsx}",
    ],
    testTimeout: 180_000,
  },
});

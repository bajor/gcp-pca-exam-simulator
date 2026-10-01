import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173/gcp-pca-exam-simulator/",
    trace: "on-first-retry",
  },
  projects: [
    // The full Chromium build has an inline PDF viewer, which the case-study pane needs; the headless shell has none.
    { name: "desktop", use: { ...devices["Desktop Chrome"], channel: "chromium", viewport: { width: 1280, height: 720 } } },
    { name: "mobile", use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } } },
  ],
  webServer: [
    {
      command: "npm run preview -- --host 127.0.0.1",
      port: 4173,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4174",
      port: 4174,
      reuseExistingServer: !process.env.CI,
    },
  ],
});

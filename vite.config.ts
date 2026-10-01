import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/gcp-pca-exam-simulator/",
  plugins: [react()],
});

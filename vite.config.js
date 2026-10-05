import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On GitHub Actions, GITHUB_REPOSITORY is "owner/repo", so the site is served
// from "/repo/". Locally (npm run dev / build) the base stays "/".
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  plugins: [react()],
  base: repo ? `/${repo}/` : "/",
});

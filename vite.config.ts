import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function resolveBasePath(): string {
  const repository = (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.GITHUB_REPOSITORY;
  if (!repository) {
    return "/";
  }

  const [owner, repo] = repository.split("/");
  if (!owner || !repo) {
    return "/";
  }

  return repo === `${owner}.github.io` ? "/" : `/${repo}/`;
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: resolveBasePath(),
});

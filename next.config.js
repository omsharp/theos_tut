/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true, // makes build faster, check for erros in github actions
  },
  eslint: {
    ignoreDuringBuilds: true, // makes build faster
  },
};

export default config;

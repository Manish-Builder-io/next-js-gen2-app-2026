import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools({ enabled: false })({
  // BuilderDevTools always attaches a webpack() config, even when disabled.
  // Next 16 build defaults to Turbopack and refuses to proceed if it sees a
  // webpack config with no turbopack config, so declare one explicitly.
  turbopack: {},
});

export default nextConfig;

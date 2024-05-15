/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["next-logger"],
  experimental: {
    // https://github.com/sainsburys-tech/next-logger/issues/13#issuecomment-1763535453
    instrumentationHook: true, // For next-logger
  },
};

module.exports = nextConfig;

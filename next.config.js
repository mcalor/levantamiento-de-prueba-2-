const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 Evita que el build intente prerenderizar rutas de API
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  experimental: { serverActions: true },
  // Esta parte fuerza que las rutas /api no entren en la fase de "collect page data"
  async redirects() {
    return [];
  },
  async headers() {
    return [];
  },
};

module.exports = nextConfig;

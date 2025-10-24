import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Tetap izinkan placehold.co sebagai fallback
        port: '',
        pathname: '/**',
      },
      { // <-- Tambahkan konfigurasi ini
        protocol: 'https',
        hostname: 'img.youtube.com', // Izinkan domain thumbnail YouTube
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

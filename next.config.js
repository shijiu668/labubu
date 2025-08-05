/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.apicore.ai',
      },
      {
        protocol: 'https',
        hostname: 'delivery-us1.bfl.ai',
      },
      {
        protocol: 'https',
        hostname: '4kubhx8quxsn2fbc.public.blob.vercel-storage.com',
      }
    ],
  },
}
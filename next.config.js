/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
    domains:['img.freepik.com', 'flaticon.es', 'assets.digitalocean.com']
  },
}

module.exports = nextConfig;

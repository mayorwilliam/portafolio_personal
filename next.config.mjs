/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Allow external images from Notion/User sources
            }
        ]
    }
};

export default nextConfig;

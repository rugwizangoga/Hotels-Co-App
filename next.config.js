/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos', 'plus.unsplash.com', 'images.unsplash.com','loremflickr.com'],
      },

    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig

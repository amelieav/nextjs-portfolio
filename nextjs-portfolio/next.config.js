/**
 * @type {import('next').NextConfig}
 */
const NextConfig = {
  assetPrefix: '/',
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  }
}

module.exports = NextConfig
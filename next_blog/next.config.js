const withImages = require('next-images')
const path = require('path')

module.exports = withImages({
  reactStrictMode: true,
  include: path.resolve(__dirname, 'src/images'),
  webpack(config, options) {
    return config
  }
})

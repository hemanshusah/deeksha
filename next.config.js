// Add this if you don't have next.config.js
module.exports = {
  webpack: (config) => {
    config.cache = true;
    return config;
  }
}
// next.config.js
module.exports = {
  experimental: {
    esmExternals: true, // если включено, попробуй отключить
    fontLoaders: [{ loader: "@next/font/google", options: {} }],
  },
};

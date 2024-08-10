const path = require("path");

module.exports = {
  mode: "development", // or 'production' or 'none'
  //...
  devServer: {
    allowedHosts: 'all',
    static: {
      directory: path.join(__dirname, ""),
    },
    compress: true,
  },
};

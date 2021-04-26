const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@helpers": path.resolve(__dirname, "src/helpers/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@apollographql_queries": path.resolve(
        __dirname,
        "src/apollographql/queries/"
      ),
    },
  },
};

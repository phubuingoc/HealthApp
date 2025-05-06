module.exports = {
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/postcss")({
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    }),
  ],
};

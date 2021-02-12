module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      inset: {
        "1/10": "10%",
      },
      fontFamily: {
        "suez-one": ["Suez One, Helvetica, Arial, sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

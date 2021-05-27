module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#000",
      }),
      inset: {
        "1/10": "10%",
      },
      fontFamily: {
        "suez-one": ["Helvetica, Arial, sans-serif"],
      },
      width: {
        ft: "fit-content",
        50: "50rem",
        112: "112",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#111827",
        secondary: "#374151",
      }),
      inset: {
        "1/10": "10%",
      },
      fontFamily: {
        "suez-one": ["Suez One, Helvetica, Arial, sans-serif"],
      },
      backgroundImage: (theme) => ({
        "realtor-dashboard-one":
          "url('@images/realtordashboard/landingpagebackground1.jpg')",
        "realtor-dashboard-two":
          "url('@images/realtordashboard/landingpagebackground2.jpg')",
      }),
      width: {
        ft: "fit-content",
        50: "50rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

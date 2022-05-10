module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redhat: "Red Hat Display, sans-serif",
      },
      colors: {
        main: "#1450FA",
        "main-dark": "#171717",
      },
      lineHeight: {
        big: "6rem",
      },
      height: {
        big: "36rem",
      },
    },
    minHeight: {
      avg: "90vh",
    },
  },
  plugins: [],
};

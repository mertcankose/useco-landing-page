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
        medium:"3.3rem",
        mediumup:"4.125rem",
        big: "6rem",
      },
      height: {
        big: "36rem",
      },
      spacing: {
        'medium':'2.125rem'
      },
      maxWidth: {
        'custom': '83.625rem',
        'middle': '30.25rem'
      }
    },

  },
  plugins: [],
};

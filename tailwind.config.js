const defaultTheme = require("tailwindcss/defaulttheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xs": "265px",
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        "2xs": "265px",
        xs: "375px",
      },
    },
  },
  plugins: [],
};

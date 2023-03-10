/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const { getTailColors } = require("@juel/hooks/tailwind");

const colors = { main: "", sec: "", neu: "" };
const tailColors = getTailColors(colors);

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    screens: {
      xxs: "400px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    extend: {
      colors: tailColors,
      fontFamily: {
        main: '"El Messiri"',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};

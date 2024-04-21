/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        40: "10rem",
      },
      colors: {
        primary: "#5D34EC",
        "primary-l": "#F3E7FF",
        "primary-xl": "rgba(93, 52, 236, 0.20)",
        black: "#333",
        "secondary-text": "#707070",
        grey: "#d3d3d3",
        "grey-l": "#fafafa",
        "bg-input": "#FBFBFB",
        secondary: "#00D09C",
        "special-green": "#24D6AA",
        "special-blue": "#007AFF"
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "10%, 30%": { transform: "translateX(-4px)" },
          "20%, 40%": { transform: "translateX(4px)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: {
        shake: "shake 8s ease-in-out infinite",
      },
      fontFamily: {
        inter: 'Inter, Arial, sans-serif'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },

        ".scrollbar-default": {
          /* IE and Edge */
          "-ms-overflow-style": "auto",

          /* Firefox */
          "scrollbar-width": "auto",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
      });
    }),
  ],
};

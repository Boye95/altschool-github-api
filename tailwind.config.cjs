/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      ham: { max: "900px" },
      // => @media (max-width: 900px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      lexical: { max: "600px" },
      // => @media (max-width: 600px) { ... }

      xs: { max: "400px" },
      // => @media (max-width: 400px) { ... }
    },
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

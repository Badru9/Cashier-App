/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
      },
      colors: {
        first: "#0F2C59",
        second: "#f3f3f3",
        beigeTertiary: "#765827",
        dark: "#091e40",
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
};

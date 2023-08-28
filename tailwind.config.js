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
        beigePrimary: "#EAC696",
        beigeSecondary: "#C8AE7D",
        beigeTertiary: "#765827",
        Brown: "#65451F",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        GreyCloud: "#B6B6B6",
        StarDust: "#9E9E9E",
        Grey: "#909090",
        Platinum: "#E4E4E4",
        GreyChateau: "#A6A8B1",
        SpunPearl: "#AEA9B4",
        AquaHaze: "#F1F3F9",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}


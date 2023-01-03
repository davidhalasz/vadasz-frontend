/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBlue': '#264653',
        'customGreen': '#2a9d8f',
        'customYellow': '#e9c46a',
        'customOrange': '#f4a261',
        'customRed': '#e76f51',
        'customMint': '#cbf3f0',
        'customIce': '#86bbd8',
        'customPurple': '#4e598c',
        'customPurple2': '#4e598d',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

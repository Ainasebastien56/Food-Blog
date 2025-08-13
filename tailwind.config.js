/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

   daisyui: {
    themes: ["light"], // Forcer le thème clair
  },
}


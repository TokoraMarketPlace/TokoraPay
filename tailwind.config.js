// tailwind.config.js
module.exports = {
  content: [
    "./index.html",         // For Vite projects
    "./src/**/*.{js,ts,jsx,tsx}", // For all your React files
  ],
  theme: {
    extend: {
      colors:{
        cream: "#E9E7E5",
      },
      fontFamily: {
        polysans: ['PolySans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
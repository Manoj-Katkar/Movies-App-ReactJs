/** @type {import('tailwindcss').Config} */
export default {
  content: [
  // !here I have to mention for which files the talwind css should get applied

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}





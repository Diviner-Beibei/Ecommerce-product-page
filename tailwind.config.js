/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        "neutral-white": "hsl(0, 0%, 100%)",
        "primary-orange": "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        // "menubg": "background:linear-gradient(to tight,hsl(0, 0%, 100%) 0%, hsl(0, 0%, 100%) 50%,rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.75) 100%)"
      }
    },
  },
  plugins: [],
}


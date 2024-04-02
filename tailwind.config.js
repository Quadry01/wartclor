/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    

    colors:{
      'white':"#F0F0F0",
      'dark-blue': "#213555",
      'light-blue': "#4F709C",
      'light-yellow': "#E5D283"
    },
    extend: {
      backgroundImage: {
        'hero': "url('../public/hero.jpg')",
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

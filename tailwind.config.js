/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': '4px -3px 30px rgba(249, 115, 22, 0.7)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      },
      fontSize: {
        'icon-size': '3rem',
      },
      transitionDuration: {
        3000 : "3000ms"
      },
      colors: {
        react: '#61DAFB',
        tailwind: '#38b2a0', 
        node: '#339933',        
        mysql: '#4479A1',       
        mongodb: '#47A248',     
        java: '#007396',       
        typescript: '#3178C6',      
      }
    },
  },
  plugins: [],
}

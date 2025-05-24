/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './App.{js,ts,tsx,jsx}',
  './pages/**/*.{js,ts,tsx,jsx}',
  './components/**/*.{js,ts,tsx,jsx}',
  './pages/personal/**/*.{js,ts,tsx,jsx}',
],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        pb: '#091249',
        gy: '#A1A1A1',
        gg: '#576B74',
        og: '#FF7300',
        gl: '#F5F5F5',
        
      },
      fontSize: {
        '3xl': '30px',
      },
      fontFamily: {
        'inter': ['Inter_400Regular'],
        'inter-bold': ['Inter_700Bold'],
      },
         },
  },
  plugins: [],
};

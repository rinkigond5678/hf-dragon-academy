/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {

    screens: {
      "sm": '640px',
      "md": '768px',
      "lg": '960px',
      "xl": '1200px'
    },

    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 1)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 1)',
            '0 45px 65px rgba(0, 0, 0, 1)'
        ]
      },
      padding: {
        "default": '20px',
      },
      colors: {
        'primary': "#75A47F",
        'secondary': "#FA7070",
        'tert': "#fff2d0",
        'accent': "#967E76",
        "bg": "#231b25"
      },
      fontFamily: {
        'primary': ['Cinzel'],
        'secondary': ['Merriweather'],
        'display':['cinzel','sans-serif'],
        'body':['merriweather','sans-serif']
      },

    },

    
    
  },
 
  plugins: [],
}



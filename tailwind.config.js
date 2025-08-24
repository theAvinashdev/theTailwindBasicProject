/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
          'primary-orange': '#FF5722',
          'light-orange': '#FF7043',
          'dark-orange': '#E64A19',
          'white': '#FFFFFF',
          'light-gray': '#F5F5F5',
          'medium-gray': '#666666',
          'dark-gray': '#333333',
          'border-gray': '#E0E0E0',
          'overlay':'rgba(0,0,0,0.5)'
        },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        body: ['Figtree', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
       
      },
    extend: {},
  
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

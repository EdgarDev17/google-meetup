module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily:{
        'sans': ['Poppins', 'sans-serif'],
        'mono': ['Space Mono', 'sans-serif']
      },
      extend: {
        backgroundImage: {
          'langind-bg': "url('/bg.png')",
          'langind-bg-path': "url('public/bg.png')",
        }
      }
  },
  plugins: [],
}
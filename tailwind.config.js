/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        surface: "url('./assets/surface.png')",
        'surface-dm': "url('./assets/surface-dm.png')",
        invana: "url('./assets/ivana.png')",
        invana: "url('./assets/ivana.png')",
        'stucker-05': "url('./assets/logo_stucker-05.png')",
        'stucker-06': "url('./assets/logo_stucker-06.png')",
        'stucker-07': "url('./assets/logo_stucker-07.png')",
        'stucker-09': "url('./assets/logo_stucker-09.png')",
        usp1: "url('./assets/USP0.png')"
      },
      fontFamily: {
        'dm-sans': ['DM Sans'],
        'poly-sans': ['PolySans']
      }
    }
  },
  plugins: []
};

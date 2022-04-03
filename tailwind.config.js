module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
         '50': '#f3fcfc',
          '100': '#e6f8f8',
          '300': '#99e3e3',
          '400': '#4dcfcf',
          '200': '#bfeeee',
          '500': '#00baba',
          '600': '#00a7a7',
          '700': '#008c8c',
          '800': '#007070',
          '900': '#005b5b',
        },
        gray: {
          '25': '#f5f7fa',
          '50': '#e9edf5',
          '100': '#d1dbe8',
          '200': '#b2c2d6',
          '300': '#91a4bc',
          '400': '#7a90aa',
          '500': '#647e9a',
          '600': '#566e88',
          '700': '#465a71',
          '800': '#344456',
          '900': '#253343',
        },
      },
    },
  },
  plugins: [
      require('tailwindcss-rtl'),
  ],
}

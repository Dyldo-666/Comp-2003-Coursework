module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
      colors: {
        peach: {
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#fed1ac',
          '300': '#feb484',
          '400': '#fe9760',
          '500': '#ff7840', 
          '600': '#db4c24',
          '700': '#b7300c',
          '800': '#931800',
          '900': '#7a0c00'
        },
        'dark-blue': '#1f262f'
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover"],
      grayscale: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          "text-decoration-thickness": ".35rem",
        },
        ".underline-yellow": {
          "text-decoration-color": "#FFA800",
        },
      };
      addUtilities(extendUnderline);
    },
    require('flowbite/plugin')
  ],
};

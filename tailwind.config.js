module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '12rem',
      },
    },
    extend: {
      screens: {
        '3xl': '1920px',
        '2xl': '1160px',
        // '4xl': '2560px'
      },
      maxWidth: {
        '1470px': '1470px',
        '927px': '927px',
        '768px': '768px',
        '586px': '586px',
        'container': '1160px',
        '176px': '176px',
      },
      colors: {
        primary: "#1d7b38",
        'blue-purple': '#453175',
        'blue-purple1': '#8567CC',
        'green1': '#87C23F',
        'gray1': '#EFEFEF',
        'gray2': '#F6F6F6',
        secondary: "#403f3f",
        black: "#242424",
        gray: {
          250: "#e6e6e6",
          750: "#4d4d4d",
          800: "#939598",
        },
        green: {
            350: "#8fc941",
          },

      },
      fontSize: {
        '95px': '95px',
        '85px': '85px',
        '78px': '78px',
        '75px': '75px',
        '65px': '65px',
        '53px': '53px',
        '50px': '50px',
        '45px': '45px',
        '42px': '42px',
        '40px': '40px',
        '35px': '35px',
        '28px': '28px',
        '20px': '20px',
      },
      height: {
        sm: '8px',
         md: '16px',
         lg: '24px',
         xl: '48px',
         xll: '64px',
      },
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        xll: '64px',
        xxl: '94px',
       },
       textColor: theme => theme('colors'),
     textColor: {
       'green1': '#87C23F',
       'primary': '#3490dc',
       'danger': '#e3342f',
     },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}

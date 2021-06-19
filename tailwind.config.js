module.exports = {
  purge: {
    enabled: true,
    content: [
        './**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        body: ['Roboto'],
      },
      screens: {
        '3xl': '1920px',
        '2xl': '1600px',
        // '4xl': '2560px'
      },
      maxWidth: {
        '1470px': '1470px',
        'container': '1160px',
        '1100px': '1100px',
        '1648px': '1648px',
        '927px': '927px',
        '828px': '828px',
        '768px': '768px',
        '586px': '586px',
        '428px': '428px',
        '380px': '380px',
        '176px': '176px',
        '100px': '100px',
        '40px': '40px',
        '35px': '35px',
        '30px': '30px',
        '20px': '20px',
      },
      colors: {
        primary: "#1d7b38",
        'blue-purple': '#453175',
        'blue-purple1': '#8567CC',
        'green1': '#87C23F',
        'green2': "#8fc941",
        'gray1': '#EFEFEF',
        'gray2': '#F6F6F6',
        secondary: "#403f3f",
        blue: "#453175",
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
        '55px': '55px',
        '53px': '53px',
        '50px': '50px',
        '45px': '45px',
        '42px': '42px',
        '40px': '40px',
        '35px': '35px',
        '32px': '32px',
        '30px': '30px',
        '28px': '28px',
        '25px': '25px',
        '23px': '23px',
        '20px': '20px',
        '18px': '18px',
      },
      height: {
        sm: '8px',
         md: '16px',
         lg: '24px',
         xl: '48px',
         xll: '64px',
         '40px': '40px',
      },
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        xll: '64px',
        xxl: '94px',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
       },
       borderWidth: {
         '5' : '5px',
         '6' : '6px'
       },
       textColor: theme => theme('colors'),
    },
  },
  plugins: [],
}

export const tokensLight = {
  color: {
    primary: '#4C8DEB',
    secondary: '#5AD6B0',
    text: '#405169',
    background: '#F9FAFF',
    white: '#FFFFFF',
    black: '#000000',
    info: '#FFAB49',
    danger: '#EE5D70',
    active: 'rgba(35, 80, 188, 0.7);',
  },
};

export const themeSettings = () => {
  return {
    palette: {
      mode: 'light',
      primary: {
        main: tokensLight.color.primary,
      },
      secondary: {
        main: tokensLight.color.secondary,
      },
      info: {
        main: tokensLight.color.info,
      },
      error: {
        main: tokensLight.color.danger,
      },
      background: {
        default: tokensLight.color.background,
        paper: tokensLight.color.white,
        active: tokensLight.color.active,
      },
      text: {
        primary: tokensLight.color.text,
      },
    },

    // https://mui.com/customization/typography/
    typography: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },

    // https://mui.com/customization/breakpoints/
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1536,
        xxl: 1920,
      },
    },

    // https://mui.com/customization/components/
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  };
};

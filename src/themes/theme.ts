import { alpha, createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: '#FFE1AE',
      main: '#FFCB74',
      dark: '#FFBC47',
      contrastText: '#111111',
    },
    secondary: {
      light: '#534D56',
      main: '#343036',
      dark: '#1F1D1E',
      contrastText: '#F7F6FA',
    },
    text: {
      primary: '#2A262B',
      secondary: '#818283',
    },
    background: {
      default: '#F7F6FA',
      paper: '#F3F2F8',
    },
    link: '#5B49D6',
    success: {
      main: '#53B270',
    },
    warning: {
      main: '#FFA50A',
    },
    error: {
      main: '#F55659',
    },
    info: {
      main: '#6AA2D0',
    },
  },
  typography: {
    fontWeightBold: 800,
    h1: { fontSize: '5rem', letterSpacing: 0 },
    h2: { fontSize: '3.75rem', letterSpacing: 0 },
    h3: { fontSize: '3rem', letterSpacing: 0 },
    h4: { fontSize: '2.5rem', letterSpacing: 0 },
    h5: { fontSize: '2rem', letterSpacing: 0 },
    h6: { fontSize: '1.5rem', letterSpacing: 0 },
    subtitle1: { fontSize: '1.25rem', fontWeight: 'lighter', letterSpacing: 0 },
    subtitle2: { fontSize: '1.2rem', fontWeight: 'lighter', letterSpacing: 0 },
    body1: { fontSize: '1.125rem', letterSpacing: 0 },
    body2: { fontSize: '1rem', letterSpacing: 0 },
    caption: { fontSize: '0.75rem', letterSpacing: 0 },
  },
  shadows: [
    'none',
    '0px 4px 8px rgba(26, 30, 63, 0.08)', // Normal shadow
    '0px 4px 12px rgba(26, 30, 63, 0.16)', // Hover state shadow
    '8px 8px 8px 0 rgba(0,0,0,0.2), -8px -8px 8px 0 rgba(255,255,255,0.04)', //outset row shadows,
    'inset 8px 8px 8px 0 rgba(0,0,0,0.2), inset -8px -8px 8px 0 rgba(255,255,255,0.04)', //inset row shadows,
    '0px 4px 10px rgba(0, 0, 0, 0.1)', // Card shadow
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)',
    '0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 1px rgba(0,0,0,0.02)',
    '0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 2px rgba(0,0,0,0.02)',
    '0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 2px rgba(0,0,0,0.02)',
    '0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 3px rgba(0,0,0,0.02)',
    '0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 3px rgba(0,0,0,0.02)',
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 4px rgba(0,0,0,0.02)',
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 4px rgba(0,0,0,0.02)',
    '0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 4px rgba(0,0,0,0.02)',
    '0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 5px rgba(0,0,0,0.02)',
    '0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 5px rgba(0,0,0,0.02)',
    '0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 5px rgba(0,0,0,0.02)',
    '0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 6px rgba(0,0,0,0.02)',
    '0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 6px rgba(0,0,0,0.02)',
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 7px rgba(0,0,0,0.02)',
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 7px rgba(0,0,0,0.02)',
    '0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 7px rgba(0,0,0,0.02)',
    '0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 8px rgba(0,0,0,0.02)',
    '0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 8px rgba(0,0,0,0.02)',
  ],
  shape: {
    borderRadius: 4,
  },
})

theme.components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        scrollBehavior: 'smooth',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      body: {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'filled',
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        '&::placeholder': {
          opacity: 1,
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      input: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '24px',
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        overflow: 'hidden',
        backgroundColor: alpha(theme.palette.secondary.main, 0.2),
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:before': {
          display: 'none',
        },
        '&:after': {
          display: 'none',
        },
      },
      input: {
        color: theme.palette.secondary.contrastText,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '24px',
      },
    },
  },
}

theme = responsiveFontSizes(theme)

export { theme }

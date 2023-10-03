export declare module '@mui/material/styles/createPalette' {
  // * Override `TypeBackground` for background palette
  interface TypeBackground {
    default: string
    paper: string
  }

  // * Override `primary` and `secondary` for background palette
  interface PaletteColor {
    light: string
    main: string
    dark: string
    contrastText: string
  }

  interface Palette {
    link: string
  }

  interface PaletteOptions {
    link: string
  }

  // *  allow configuration using `createTheme`
  interface SimplePaletteColorOptions {
    light?: string
    main: string
    dark?: string
    contrastText?: string
  }

  // * Override `palette.text`
  interface TypeText {
    primary: string
    secondary: string
    disabled: string
    light: string
    main: string
    dark: string
  }
}

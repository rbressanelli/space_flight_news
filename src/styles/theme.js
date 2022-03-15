import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D07017",
    },
    secondary: {
      main: "#302E53",
    },

    blackPearl: {
      main: "#1e2022",
    },
    text: {
      primary: '#1e2022',
    },
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },

  typography: {
    fontFamily: 'Roboto Condensed',    
  },  
});

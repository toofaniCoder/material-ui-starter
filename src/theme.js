import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    // Style sheet name ⚛️
    // Write component name for style overrides
    
    MuiCssBaseline: {
      '@global': {
       // wirte global styling here
      },
    },
  },
  // set default props of any component
  props: {
    // Name of the component ⚛️
  },
});

export default theme;

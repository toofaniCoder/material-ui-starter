import {
  Container,
  Paper,
  Box,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
 // add some styles
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Box} py={4}>
        <Paper component={Box} p={3}>
          <Typography align="center" variant="h3">
            Hello Material UI
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;

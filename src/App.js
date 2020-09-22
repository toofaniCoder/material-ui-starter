import React from "react";
import "./styles/App.css";
import { Container, Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper component={Box} width="30%" p={4} mx="auto">
        <Typography color="secondary" variant="h4" align="center">
          Hello Material UI
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;

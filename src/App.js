import React from "react";
import "./styles/App.css";
import { Typography, Container, Box } from "@material-ui/core";
function App() {
  return (
    <Box textAlign="center" py={23}>
      <Container maxWidth="sm">
        <Typography variant="h1" color="secondary">
          Material UI
        </Typography>
        <Typography variant="body1">
          React components for faster and easier web development. Build your own
          design system, or start with Material Design
        </Typography>
      </Container>
    </Box>
  );
}

export default App;

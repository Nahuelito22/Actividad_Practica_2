import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import NavbarGus from "./components/NavbarGus";
import Saludo from "./components/Saludo";
import VirtualDomDemo from "./components/VirtualDomDemo";

function App() {
  return (
    <>
      <NavbarGus />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              ¡Hola, mundo!
            </Typography>
            <Saludo />
          </Paper>

          <VirtualDomDemo />
        </Box>
      </Container>
    </>
  );
}

export default App;

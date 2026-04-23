import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>

      

        {/* Botones de navegación */}
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Tareas</Button>
        <Button color="inherit">Usuarios</Button>

        {/* Espacio flexible */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Usuario */}
        <Typography variant="body1">
          Usuario
        </Typography>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
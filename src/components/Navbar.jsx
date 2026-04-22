import {AppBar, Toolbar, Typography} from "@mui/material";

function Navbar() { 
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My DashBoard
                </Typography>
                <Typography>Usuario</Typography>
            </Toolbar>
            </AppBar>
    );
}

export default Navbar;
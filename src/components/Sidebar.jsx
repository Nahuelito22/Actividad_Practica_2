import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import { Home, BarChart, People, Settings, Layers } from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Inicio', icon: <Home />, active: true },
    { text: 'Analíticas', icon: <BarChart /> },
    { text: 'Usuarios', icon: <People /> },
    { text: 'Proyectos', icon: <Layers /> },
    { text: 'Ajustes', icon: <Settings /> },
  ];

  return (
    <Box sx={{ width: 240, bgcolor: 'background.paper', height: '100vh', borderRight: '1px solid #e0e0e0', pt: 2 }}>
      <Typography variant="h6" sx={{ px: 3, pb: 2, fontWeight: 'bold', color: 'primary.main' }}>
        Dashboard App
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton selected={item.active}>
              <ListItemIcon sx={{ color: item.active ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

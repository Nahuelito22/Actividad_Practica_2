import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import SummaryCards from './SummaryCards';
import DataTable from './DataTable';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: '#fbfbfb', minHeight: '100vh' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              Resumen del Sistema
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Bienvenido de nuevo. Aquí tienes las estadísticas de hoy.
            </Typography>
          </Box>
          
          <SummaryCards />
          
          <DataTable />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;

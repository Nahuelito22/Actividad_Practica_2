import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Chip, Box } from '@mui/material';
import { recentUsers } from '../data/mockData';

const DataTable = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Activo': return 'success';
      case 'Inactivo': return 'error';
      case 'Pendiente': return 'warning';
      default: return 'default';
    }
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 2 }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Usuarios Recientes
        </Typography>
      </Box>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Rol</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentUsers.map((user) => (
            <TableRow key={user.id} hover>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Chip 
                  label={user.status} 
                  color={getStatusColor(user.status)} 
                  size="small" 
                  variant="outlined"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

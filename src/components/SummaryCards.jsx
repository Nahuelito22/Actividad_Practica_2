import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { stats } from '../data/mockData';

const SummaryCards = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.label}>
          <Card sx={{ height: '100%', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 2 }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom variant="overline">
                {stat.label}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: stat.color }}>
                  {stat.value}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;

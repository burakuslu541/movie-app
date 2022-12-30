import React from 'react';
import Header from 'Components/Header';
import { Box, useTheme } from '@mui/material';
import FlexBetween from 'Components/FlexBetween';
import CategoryChart from 'Pages/Dashboard/CategoryChart';
import TimeChart from 'Pages/Dashboard/TimeChart';
import TopMovies from 'Pages/Dashboard/TopMovies';
import Activities from 'Pages/Dashboard/Activities';
import Movies from './Movies';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        width: '100%',
      }}
    >
      <FlexBetween
        flexDirection="column"
        sx={{ alignItems: 'start', width: '100%' }}
      >
        <Header title="Dashboard" />
        <FlexBetween>
          <Box>
            <FlexBetween>
              <CategoryChart />
              <TimeChart />
            </FlexBetween>
            <FlexBetween>
              <TopMovies />
              <Movies />
            </FlexBetween>
          </Box>
          <Box>
            <Activities />
          </Box>
        </FlexBetween>
      </FlexBetween>
    </Box>
  );
};

export default Dashboard;

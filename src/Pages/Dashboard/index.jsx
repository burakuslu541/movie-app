import React, { useEffect } from 'react';
import Header from 'Components/Header';
import { Container, Grid } from '@mui/material';
import CategoryChart from 'Pages/Dashboard/CategoryChart';
import TimeChart from 'Pages/Dashboard/TimeChart';
import TopMovies from 'Pages/Dashboard/TopMovies';
import Activities from 'Pages/Dashboard/Activities';
import Movies from './Movies';

const Dashboard = () => {
  const [size, setSize] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container maxWidth="xxl">
      <Header title="Dashboard" />
      {size <= 960 && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CategoryChart />
          </Grid>
          <Grid item xs={12}>
            <TimeChart />
          </Grid>
          <Grid item xs={12}>
            <TopMovies />
          </Grid>
          <Grid item xs={12}>
            <Movies />
          </Grid>
          <Grid item xs={12}>
            <Activities />
          </Grid>
        </Grid>
      )}
      {size > 960 && size <= 1390 && (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CategoryChart />
            <TopMovies />
          </Grid>
          <Grid item xs={12} md={6}>
            <TimeChart />
            <Movies />
          </Grid>
          <Grid item xs={12}>
            <Activities />
          </Grid>
        </Grid>
      )}
      {size > 1390 && (
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <CategoryChart />
            <TopMovies />
          </Grid>

          <Grid item xs={12} md={6}>
            <TimeChart />
            <Movies />
          </Grid>

          <Grid item xs={12} md={3}>
            <Activities />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Dashboard;

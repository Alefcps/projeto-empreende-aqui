import React from 'react';
import { Box, Typography } from '@mui/material';
import { Drawer } from '../../components';
import { Cards } from '../../components';
import { useWindowWidth } from "../utils/useWindowWidth";

const Home = () => {
  const width = useWindowWidth();

  return (
    <>
      <Box
        component="main"
        sx={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'start',
          marginTop: '50px',
          marginLeft: width < 768 ? '20px' : '50px',
        }}
        role="main"
      >
        <Drawer />
        <Box component="section">
          <Typography variant="h5" noWrap sx={{ marginBottom: '24px' }}>
            Empreende aqui
          </Typography>
          <Cards />
        </Box>
      </Box>
    </>
  );
};

export default Home;
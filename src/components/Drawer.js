import React from 'react';
import { Box } from '@mui/material';
import {
  Star as StarIcon,
  Email as EmailIcon,
  Chat as ChatIcon,
  ArrowUpward as ArrowUpIcon,
  SentimentSatisfiedAlt as SentimentSatisfiedAltIcon,
} from '@mui/icons-material';

const FixedDrawer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '80px',
        backgroundColor: '#001B37',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <StarIcon sx={{ fontSize: 36, marginY: '20px' }} />
      <EmailIcon sx={{ fontSize: 36, marginY: '20px' }} />
      <ChatIcon sx={{ fontSize: 36, marginY: '20px' }} />
      <ArrowUpIcon sx={{ fontSize: 36,  marginTop: 'auto' }} />
      <SentimentSatisfiedAltIcon sx={{ fontSize: 56,  }}/>
    </Box>
  );
};

export default FixedDrawer;
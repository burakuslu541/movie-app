import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
const Header = ({ title }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        color={theme.palette.text.primary}
        sx={{
          mt: '32px',
          mb: '19px',
          ml: '17px',
          fontSize: '28px',
          fontWeight: '400',
          lineHeight: '32px',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;

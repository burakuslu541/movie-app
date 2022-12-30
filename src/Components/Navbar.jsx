import React from 'react';
import { Search } from '@mui/icons-material';
import FlexBetween from 'Components/FlexBetween';
import { useDispatch } from 'react-redux';
import profileImage from 'assets/images/profile.png';
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { global } = useSelector((state) => state);

  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: '70px',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        {/* LEFT SIDE */}
        <FlexBetween>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="5px"
            gap="5px"
            width="214px"
            height="30px"
            border="1px solid rgba(76, 141, 235, 0.1865)"
          >
            <IconButton
              sx={{
                color: 'rgba(76, 141, 235, 0.4)',
              }}
            >
              <Search />
            </IconButton>
            <InputBase placeholder="Search" />
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <Box
            sx={{
              mr: '90px',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(216, 216, 216, 1)',
              }}
            >
              Reviewed Movies Count: {global.reviewedMovieCount}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(216, 216, 216, 1)',
              }}
            >
              Last Reviewed Movie: {global.reviewedMovieName}
            </Typography>
          </Box>
          <IconButton>
            <NotificationsIcon
              sx={{
                fontSize: '25px',
                color: '#A0BCE4',
              }}
            />
          </IconButton>

          <FlexBetween>
            <Box
              component="img"
              alt="profile"
              src={profileImage}
              height="40px"
              width="40px"
              sx={{ objectFit: 'cover', ml: '5px' }}
            />
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

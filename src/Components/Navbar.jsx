import React from 'react';
import { Search } from '@mui/icons-material';
import FlexBetween from 'Components/FlexBetween';
import profileImage from 'assets/images/profile.png';
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { InfoModal } from './Modal';

const Navbar = () => {
  const { global } = useSelector((state) => state);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

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
          backgroundColor: theme.palette.background.paper,
        }}
      >
        {/* LEFT SIDE */}
        <FlexBetween>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="5px"
            gap="5px"
            height="30px"
            border="1px solid rgba(76, 141, 235, 0.1865)"
            sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '214px',
                lg: '214px',
                xl: '214px',
                xxl: '214px',
              },
            }}
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
        <FlexBetween
          sx={{
            gap: {
              xs: '10px',
              sm: '10px',
              md: '1.5rem',
            },
          }}
        >
          {matches ? (
            <InfoModal
              count={global.reviewedMovieCount}
              name={global.reviewedMovieName}
            />
          ) : (
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
          )}
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
              sx={{
                objectFit: 'cover',
                ml: '5px',
                width: {
                  xs: '30px',
                  sm: '30px',
                  md: '40px',
                },
                height: {
                  xs: '30px',
                  sm: '30px',
                  md: '40px',
                },
              }}
            />
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

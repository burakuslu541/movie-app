import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import SellIcon from '@mui/icons-material/Sell';
import { useEffect } from 'react';

const navItems = [
  {
    text: 'dashboard',
    icon: <HomeIcon />,
  },
  {
    text: 'friends',
    icon: <GroupIcon />,
  },
  {
    text: 'documentation',
    icon: <ArticleIcon />,
  },
  {
    text: 'movieshop',
    icon: <SellIcon />,
  },
];

const Sidebar = ({ drawerWidth }) => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    const lcText = navItems[0].text.toLowerCase();
    setActive(lcText);
  }, []);
  return (
    <Box component="nav">
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            background:
              'linear-gradient(180deg, #4C8DEB 0%, #4C60EB 100%);',
            boxSizing: 'border-box',
            borderWidth: '2px',
            width: drawerWidth,
            borderRadius: '0px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '70px',
            }}
          >
            <Box
              sx={{
                height: '44px',
                width: '44px',
                backgroundColor: theme.palette.background.paper,
                borderRadius: '50%',
              }}
            />
          </Box>
          <List
            sx={{
              pt: '13px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            {navItems.map((item, index) => {
              const lcText = item.text.toLowerCase();
              return (
                <ListItem
                  key={index}
                  button
                  onClick={() => {
                    navigate(`/${item.text}`);
                    setActive(lcText);
                  }}
                  sx={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '5px',
                    backgroundColor:
                      active === lcText
                        ? theme.palette.background.active
                        : 'transparent',
                    alignItems: 'center',
                    mt: '24px',
                    '&:hover': {
                      backgroundColor:
                        theme.palette.background.active,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      width: '20px',
                      height: '20px',
                      ml: '-5px',
                      mt: '-3px',
                      color: theme.palette.background.paper,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Sidebar;

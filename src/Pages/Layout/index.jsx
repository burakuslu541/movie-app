import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from 'Components/Sidebar';
import Navbar from 'Components/Navbar';

const Layout = () => {
  return (
    <Box display="flex" width="100%" height="100%">
      <Sidebar drawerWidth="62px" />
      <Box flexGrow={1}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;

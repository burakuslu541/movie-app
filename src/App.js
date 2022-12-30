import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import Layout from './Pages/Layout';
import Dashboard from './Pages/Dashboard';
import Friends from './Pages/Friends';
import Documentation from './Pages/Documentation';
import MovieShop from './Pages/MovieShop';
function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate to="/dashboard" replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/friends" element={<Friends />} />
              <Route
                path="/documentation"
                element={<Documentation />}
              />
              <Route path="/movieshop" element={<MovieShop />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

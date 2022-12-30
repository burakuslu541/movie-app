import { Box, Typography } from '@mui/material';

import FlexBetween from 'Components/FlexBetween';
import { Search } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IconButton, InputBase, useTheme } from '@mui/material';
import { Button } from '@mui/material';
import { useState, useCallback } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ParentModal from 'Components/Modal';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

const Movies = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [selectedName, setSelectedName] = useState('Batman');
  const [selectedYear, setSelectedYear] = useState(null);
  const [inputName, setInputName] = useState('');
  const [inputYear, setInputYear] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const movieCountForPage = 6;
  const [page, setPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState([]);
  useEffect(() => {
    setMoviesPerPage([
      ...movies.slice(
        (page - 1) * movieCountForPage,
        page * movieCountForPage
      ),
    ]);
  }, [movies, page]);

  const url = `http://www.omdbapi.com/?${
    selectedName ? `s=${selectedName}` : ''
  }${selectedName && selectedYear ? `&y=${selectedYear}` : ''}${
    !selectedName && selectedYear ? `y=${selectedYear}` : ''
  }&apikey=2efbc5c`;
  const moviesHandle = useCallback(
    async (name, year) => {
      await axios
        .get(url)
        .then((res) => {
          setMovies(res.data.Search);
          setTotalResults(res.data.Search.length);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [url]
  );
  useEffect(() => {
    moviesHandle(selectedName, selectedYear);
  }, [moviesHandle, selectedName, selectedYear]);
  const searchHandle = () => {
    setSelectedName(inputName);
    setSelectedYear(inputYear);
  };
  const handleChange = (event, value) => {
    setPage(value);
    setMoviesPerPage([
      ...movies.slice(
        (value - 1) * movieCountForPage,
        value * movieCountForPage
      ),
    ]);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 1,
        boxShadow: 1,
        p: '10px 20px',
        width: '900px',
        ml: '14px',
        mt: '20px',
      }}
    >
      <FlexBetween
        sx={{
          width: '100%',
          mt: '5px',
          mb: '5px',
        }}
      >
        <Typography variant="h6">Movies</Typography>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="5px"
          gap="5px"
          width="214px"
          height="40px"
          border="1px solid rgba(76, 141, 235, 0.1865)"
        >
          <IconButton
            sx={{
              color: 'rgba(76, 141, 235, 0.4)',
            }}
          >
            <Search />
          </IconButton>
          <InputBase
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Batman"
          />
        </FlexBetween>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="5px"
          gap="5px"
          width="110px"
          height="40px"
          border="1px solid rgba(76, 141, 235, 0.1865)"
          onClick={() =>
            inputName === '' ? alert('Please enter movie name') : null
          }
        >
          <IconButton
            sx={{
              color: 'rgba(76, 141, 235, 0.4)',
            }}
          >
            <Search />
          </IconButton>
          <InputBase
            disabled={inputName === ''}
            onChange={(e) => setInputYear(e.target.value)}
            placeholder="Year"
            sx={{
              '&:disabled': {
                color: 'rgba(76, 141, 235, 0.1)',
              },
            }}
          />
        </FlexBetween>
        <Button
          onClick={searchHandle}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: theme.palette.background.active,
            },
          }}
        >
          Search
        </Button>
      </FlexBetween>

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: 350,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {moviesPerPage !== undefined && moviesPerPage.length !== 0 ? (
          <>
            <TableContainer
              component={Paper}
              sx={{
                flexGrow: 1,
              }}
            >
              <Table aria-label="simple table">
                <TableBody>
                  {moviesPerPage.map((row, index) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1 + (page - 1) * movieCountForPage}
                      </TableCell>
                      <TableCell align="left">
                        <ParentModal
                          year={row.Year}
                          title={row.Title}
                        />
                      </TableCell>
                      <TableCell align="right">{row.Year}</TableCell>
                      <TableCell align="right">
                        {row.imdbID}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack
              spacing={2}
              sx={{
                mt: '8px',
              }}
            >
              <Pagination
                count={Math.ceil(totalResults / movieCountForPage)}
                page={page}
                onChange={handleChange}
                color="primary"
                showFirstButton
                showLastButton
              />
            </Stack>
          </>
        ) : (
          <Box>Loading...</Box>
        )}
      </Box>
    </Box>
  );
};
export default Movies;

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
  const [error, setError] = useState(null);
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
          if (res.data.Response === 'False') {
            setError(res.data.Error);
          } else {
            setMovies(res.data.Search);
            setTotalResults(res.data.Search.length);
            setError(null);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(err);
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
    setInputYear('');
    setInputName('');
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
        height: '335px',
      }}
    >
      <FlexBetween
        sx={{
          width: '100%',
          mb: '5px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            alignSelf: 'start',
            mr: '5px',
          }}
        >
          Movies
        </Typography>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="5px"
          height="40px"
          border="1px solid rgba(76, 141, 235, 0.1865)"
          sx={{
            width: {
              xs: '30%',
              sm: '30%',
              md: '214px',
              lg: '214px',
              xl: '214px',
              xxl: '214px',
            },
            mr: '5px',
          }}
        >
          <IconButton
            sx={{
              width: {
                xs: '30px',
                sm: '30px',
                md: '30px',
                lg: '30px',
                xl: '30px',
              },

              color: 'rgba(76, 141, 235, 0.4)',
            }}
          >
            <Search />
          </IconButton>
          <InputBase
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Batman"
          />
        </FlexBetween>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="5px"
          height="40px"
          border="1px solid rgba(76, 141, 235, 0.1865)"
          onClick={() =>
            inputName === '' ? alert('Please enter movie name') : null
          }
          sx={{
            width: {
              xs: '30%',
              sm: '30%',
              md: '110px',
              lg: '110px',
              xl: '110px',
              xxl: '110px',
            },
            mr: '5px',
          }}
        >
          <IconButton
            sx={{
              width: {
                xs: '30px',
                sm: '30px',
                md: '30px',
                lg: '30px',
                xl: '30px',
              },
              color: 'rgba(76, 141, 235, 0.4)',
            }}
          >
            <Search />
          </IconButton>
          <InputBase
            type="number"
            disabled={inputName === ''}
            value={inputYear}
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
          height: 275,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {error ? (
          <Typography
            sx={{
              color: theme.palette.error.main,
              fontSize: '14px',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            {error}
          </Typography>
        ) : moviesPerPage !== undefined &&
          moviesPerPage.length !== 0 ? (
          <>
            <TableContainer
              component={Paper}
              sx={{
                flexGrow: 1,
                border: 'none',
                boxShadow: 'none',
                '& .MuiTableRow-root': {
                  height: '52px',
                },
              }}
            >
              <Table
                aria-label="simple table"
                size="small"
                padding="checkbox"
              >
                <TableBody>
                  {moviesPerPage.map((row, index) => (
                    <TableRow
                      key={index}
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
                          poster={row.Poster}
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
                mb: '5px',
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

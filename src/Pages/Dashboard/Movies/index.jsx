import { Box, Typography } from '@mui/material';

import FlexBetween from 'Components/FlexBetween';
import { Search } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from '@mui/material';
import { Button } from '@mui/material';
import { useState, useCallback } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ParentModal from 'Components/Modal';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

const Movies = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 1,
        boxShadow: 1,
        p: '10px 20px',
        width: '600px',
        ml: '14px',
        mt: '20px',
      }}
    >
      <FlexBetween
        sx={{
          width: '100%',
          mt: '19px',
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
          <InputBase placeholder="Batman" />
        </FlexBetween>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="5px"
          gap="5px"
          width="110px"
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
          <InputBase placeholder="Year" />
        </FlexBetween>
        <Button
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
          height: 350,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {/* <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">
                    <ParentModal
                      year={row.year}
                      title={row.title}
                      rating={row.rating}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <StarIcon
                      sx={{
                        color: 'rgba(255, 171, 73, 1)',
                        mb: '-6px',
                        mr: '4px',
                      }}
                    />
                    {row.rating}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </Box>
    </Box>
  );
};
export default Movies;

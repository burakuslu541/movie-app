import { Box, Typography } from '@mui/material';
import FlexBetween from 'Components/FlexBetween';
import StarIcon from '@mui/icons-material/Star';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ParentModal from 'Components/Modal';
const dataTopMoviesJson = {
  datasets: [
    {
      id: '1',
      title: 'The Shawshank Redemption',
      rating: '9.2',
      year: '1994',
    },
    {
      id: '2',
      title: 'The Godfather',
      rating: '9.2',
      year: '1972',
    },
    {
      id: '3',
      title: 'The Dark Knight',
      rating: '9.0',
      year: '2008',
    },
    {
      id: '4',
      title: 'The Godfather: Part II',
      rating: '9.0',
      year: '1974',
    },
    {
      id: '5',
      title: '12 Angry Me',
      rating: '9.0',
      year: '1957',
    },
  ],
};
function createRow(id, title, rating) {
  return { id, title, rating };
}
const rows = [
  createRow(
    dataTopMoviesJson.datasets[0].id,
    dataTopMoviesJson.datasets[0].title,
    dataTopMoviesJson.datasets[0].rating,
    dataTopMoviesJson.datasets[0].year
  ),
  createRow(
    dataTopMoviesJson.datasets[1].id,
    dataTopMoviesJson.datasets[1].title,
    dataTopMoviesJson.datasets[1].rating,
    dataTopMoviesJson.datasets[1].year
  ),
  createRow(
    dataTopMoviesJson.datasets[2].id,
    dataTopMoviesJson.datasets[2].title,
    dataTopMoviesJson.datasets[2].rating,
    dataTopMoviesJson.datasets[2].year
  ),
  createRow(
    dataTopMoviesJson.datasets[3].id,
    dataTopMoviesJson.datasets[3].title,
    dataTopMoviesJson.datasets[3].rating,
    dataTopMoviesJson.datasets[3].year
  ),
  createRow(
    dataTopMoviesJson.datasets[4].id,
    dataTopMoviesJson.datasets[4].title,
    dataTopMoviesJson.datasets[4].rating,
    dataTopMoviesJson.datasets[4].year
  ),
];

const TopMovies = () => {
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
        }}
      >
        <Typography variant="h6">Top Movies</Typography>
      </FlexBetween>

      <TableContainer
        component={Paper}
        sx={{
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
            {rows.map((row, _index) => (
              <TableRow
                key={_index}
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
      </TableContainer>
    </Box>
  );
};
export default TopMovies;

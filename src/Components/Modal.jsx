import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useDispatch } from 'react-redux';
import {
  increaseReviewedMovieCount,
  reviewedMovieName,
} from 'Store/Actions/global.js';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    sx: '250px',
    xs: '350px',
    sm: '500px',
    md: '700px',
  },
  bgcolor: '#3f51b5',
  border: '2px solid #3f51b5',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const styleInfo = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    sx: '250px',
    xs: '350px',
    sm: '500px',
    md: '700px',
  },
  bgcolor: '#f8c06c',
  border: '2px solid #f8c06c',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
export const InfoModal = ({ count, name }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          color: 'white',
          backgroundColor: '#FFAB49',
          height: '30px',
          ml: '10px',
          '&:hover': {
            backgroundColor: 'rgb(216, 216, 216)',
            color: '#3f51b5',
          },
        }}
      >
        Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleInfo}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              fontSize: {
                sx: '1.5rem',
                xs: '1.5rem',
                sm: '1.5rem',
                md: '2rem',
              },
              textDecoration: 'underline',
              color: 'rgb(72, 72, 72)',
            }}
          >
            Info
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              color: 'rgb(72, 72, 72)',
              fontSize: {
                sx: '1rem',
                xs: '1rem',
                sm: '1rem',
                md: '1.5rem',
              },
            }}
          >
            Reviewed Movies Count: {count}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              color: 'rgb(72, 72, 72)',
              fontSize: {
                sx: '1rem',
                xs: '1rem',
                sm: '1rem',
                md: '1.5rem',
              },
            }}
          >
            Last Reviewed Movie: {name}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const ParentModal = ({ title, year, poster, rating }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    dispatch(reviewedMovieName(title));
    dispatch(increaseReviewedMovieCount());
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!!poster && (
            <img
              src={poster}
              alt={title}
              style={{ width: '30%', mb: '15px' }}
            />
          )}
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              fontSize: {
                sx: '1.5rem',
                xs: '1.5rem',
                sm: '1.5rem',
                md: '2rem',
              },
              textDecoration: 'underline',
              color: 'rgb(216, 216, 216)',
            }}
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              color: 'rgb(216, 216, 216)',
              fontSize: {
                sx: '0.8rem',
                xs: '0.8rem',
                sm: '0.8rem',
                md: '1.5rem',
              },
            }}
          >
            This movie named {title} was made in {year}.{' '}
            {!!rating && <>It has a rating of {rating} on IMDB.</>}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default ParentModal;

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
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};

const ParentModal = ({ title, year }) => {
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
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              textDecoration: 'underline',
            }}
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: 'rgb(216, 216, 216)' }}
          >
            This movie named {title} was made in {year}.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default ParentModal;

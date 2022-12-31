import { Box, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import DraftsIcon from '@mui/icons-material/Drafts';
import FlexBetween from 'Components/FlexBetween';
const dataTopMoviesJson = {
  datasets: [
    {
      id: '1',
      title: 'Invoice Sent',
      description:
        'Invoice #0076 of amount $1300 has been emailed to email@address.com, email2@address.com',
      date: '11-02-2018',
      hour: '12:03AM',
      icon: (
        <SendIcon
          sx={{
            color: 'rgba(76, 141, 235, 1)',
            fontSize: '20px',
          }}
        />
      ),
    },
    {
      id: '2',
      title: 'Invoice Sent',
      description:
        'Invoice #0075 of amount $2000 has been emailed to email@address.com, email2@address.com',
      date: '08-02-2018',
      hour: '02:41PM',
      icon: (
        <SendIcon
          sx={{
            color: 'rgba(76, 141, 235, 1)',
            fontSize: '20px',
          }}
        />
      ),
    },
    {
      id: '3',
      title: 'Payment Received',
      description:
        'Invoice #0072 of amount $1300 has been paid and added to your account.',
      date: '11-01-2018',
      hour: '02:57PM',
      icon: (
        <DownloadIcon
          sx={{
            color: 'rgba(90, 214, 176, 1)',
            fontSize: '20px',
          }}
        />
      ),
    },
    {
      id: '4',
      title: 'Invoice Generated',
      description:
        'Invoice #0076 of amount $1300 has been generated and is ready to be sent. Send now',

      date: '04-01-2018',
      hour: '09:49AM',
      icon: (
        <DraftsIcon
          sx={{
            color: 'rgba(255, 171, 73, 1)',
            fontSize: '20px',
          }}
        />
      ),
    },
    {
      id: '5',
      title: 'Payment Received',
      description:
        'Invoice #0070 of amount $900 has been paid and added to your account.',
      date: '10-12-2017',
      hour: '03:54PM',
      icon: (
        <DownloadIcon
          sx={{
            color: 'rgba(90, 214, 176, 1)',
            fontSize: '20px',
          }}
        />
      ),
    },
    {
      id: '6',
      title: 'Invoice Generated',
      description:
        'Invoice #0075 of amount $2000 has been generated and is ready to be sent. Send now',
      date: '11-11-2017',
      hour: '02:06PM',
      icon: (
        <DraftsIcon
          sx={{
            color: 'rgba(255, 171, 73, 1)',
            fontSize: '20px',
          }}
        />
      ),
    },
  ],
};

const Activities = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 1,
        boxShadow: 1,
        p: '10px 20px',
        height: '705px',
      }}
    >
      <FlexBetween
        sx={{
          width: '100%',
          mb: '5px',
        }}
      >
        <Typography variant="h6">Activity</Typography>
      </FlexBetween>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
          mt: '-30px',
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100px',
            borderRight: '1px solid #e0e0e0',
          }}
        >
          {dataTopMoviesJson.datasets.map((item) => (
            <Box
              key={item.id}
              sx={{
                alignItems: 'flex-end',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                width: '100%',
                height: '82px',
                p: '5px 30px',
                position: 'relative',
                mb: '20px',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '9px',
                  color: 'rgba(116, 138, 169, 1)',
                }}
              >
                {item.hour}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  color: 'rgba(64, 81, 105, 1)',
                }}
              >
                {item.date}
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  top: '0px',
                  right: '-13.5px',
                  width: '25px',
                  height: '25px',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid #e0e0e0',
                  zIndex: 1,
                  backgroundColor: 'white',
                }}
              >
                {item.icon}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {dataTopMoviesJson.datasets.map((item) => (
            <Box
              key={item.id}
              sx={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                p: '5px 10px',
                width: '90%',
                height: '95px',
                border: '1px solid rgba(221, 233, 251, 1)',
                borderRadius: '5px',
                mb: '10px',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: '14px',
                  color: 'rgba(64, 81, 105, 1)',
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  color: 'rgba(64, 81, 105, 1)',
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Activities;

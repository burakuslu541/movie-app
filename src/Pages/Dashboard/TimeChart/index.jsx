import { Box, Typography } from '@mui/material';
import { MenuItem, Select } from '@mui/material';
import FlexBetween from 'Components/FlexBetween';
import { useState, useCallback } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const dataJson = {
  datasets: [
    {
      label: 'month',
      data: [
        { ranking: 'Oct', value: 200000 },
        { ranking: 'Nov', value: 350000 },
        { ranking: 'Dec', value: 99900 },
        { ranking: 'Jan', value: 200000 },
        { ranking: 'Feb', value: 10000 },
        { ranking: 'Mar', value: 20000 },
      ],
    },
    {
      label: 'week',
      data: [
        { ranking: 'Mon', value: 150 },
        { ranking: 'Tue', value: 250 },
        { ranking: 'Wed', value: 300 },
        { ranking: 'The', value: 465 },
        { ranking: 'Fri', value: 200 },
        { ranking: 'Sat', value: 100 },
        { ranking: 'Sun', value: 200 },
      ],
    },
  ],
};

const TimeChart = () => {
  const [chartValue, setChartValue] = useState([
    { ranking: 'Oct', value: 200000 },
    { ranking: 'Nov', value: 350000 },
    { ranking: 'Dec', value: 99900 },
    { ranking: 'Jan', value: 200000 },
    { ranking: 'Feb', value: 10000 },
    { ranking: 'Mar', value: 20000 },
  ]);
  const handleChange = (event) => {
    if (event.target.value === 'Week') {
      setChartValue(dataJson.datasets[1].data);
    }
    if (event.target.value === 'Month') {
      setChartValue(dataJson.datasets[0].data);
    }
  };

  return (
    <Box
      sx={{
        width: '950px',
        backgroundColor: 'white',
        borderRadius: 1,
        boxShadow: 1,
        p: '10px 20px',
        ml: '20px',
      }}
    >
      <FlexBetween
        sx={{
          width: '100%',
          mt: '19px',
        }}
      >
        <Typography variant="h6">Watch Time</Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChange}
          defaultValue="Month"
          variant="standard"
          sx={{
            boxShadow: 'none',
            fontSize: '12px',
            '.MuiSelect-icon': { color: '#4C8DEB ' },
          }}
        >
          <MenuItem value="Month">Last 6 Months</MenuItem>
          <MenuItem value="Week">Last Week</MenuItem>
        </Select>
      </FlexBetween>

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: 373,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <ResponsiveBar
          data={chartValue}
          keys={['value']}
          indexBy="ranking"
          margin={{
            top: 20,
            right: 0,
            bottom: 40,
            left: 40,
          }}
          padding={0.6}
          groupMode="grouped"
          colors="rgba(90, 214, 176, 1)"
          axisTop={null}
          axisRight={null}
          enableGridX
          enableGridY
          enableLabel={false}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
          }}
        />
      </Box>
    </Box>
  );
};
export default TimeChart;

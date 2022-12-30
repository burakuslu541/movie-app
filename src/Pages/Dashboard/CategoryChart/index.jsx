import { Box, Typography } from '@mui/material';
import { MenuItem, Select } from '@mui/material';
import FlexBetween from 'Components/FlexBetween';
import { useState, useCallback } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Label,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import Badge from '@mui/material/Badge';
const COLORS = ['#4C8DEB', '#5AD6B0', '#FFAB49', '#EE5D70'];
const dataJson = {
  datasets: [
    {
      label: 'week',
      data: [
        { name: 'Group A', value: 40 },
        { name: 'Group B', value: 350 },
        { name: 'Group C', value: 999 },
        { name: 'Group D', value: 20 },
      ],
    },
    {
      label: 'month',
      data: [
        { name: 'Group A', value: 150 },
        { name: 'Group B', value: 250 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 465 },
      ],
    },
    {
      label: 'year',
      data: [
        { name: 'Group A', value: 4580 },
        { name: 'Group B', value: 2390 },
        { name: 'Group C', value: 3324 },
        { name: 'Group D', value: 2323 },
      ],
    },
  ],
};

const CategoryChart = () => {
  const [chartValue, setChartValue] = useState([
    { name: 'Group A', value: 150 },
    { name: 'Group B', value: 250 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 465 },
  ]);
  const handleChange = (event) => {
    if (event.target.value === 'Week') {
      setChartValue(dataJson.datasets[0].data);
    }
    if (event.target.value === 'Month') {
      setChartValue(dataJson.datasets[1].data);
    }
    if (event.target.value === 'Year') {
      setChartValue(dataJson.datasets[2].data);
    }
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 1,
        boxShadow: 1,
        p: '10px 20px',
        width: '600px',
        ml: '14px',
      }}
    >
      <FlexBetween
        sx={{
          width: '100%',
          mt: '19px',
        }}
      >
        <Typography variant="h6">Categories</Typography>
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
          <MenuItem value="Month">This Month</MenuItem>
          <MenuItem value="Year">This Year</MenuItem>
          <MenuItem value="Week">This Week</MenuItem>
        </Select>
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
        <ResponsiveContainer>
          <PieChart width={200} height={200}>
            <Pie
              activeIndex={activeIndex}
              data={chartValue}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {chartValue.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label width={100} fontSize="26px" position="center">
                {chartValue[activeIndex].value}
              </Label>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <FlexBetween
        sx={{
          width: '100%',
        }}
      >
        <Typography fonstSize="12px" mr="5px">
          <Badge
            badgeContent=" "
            sx={{
              width: '15px',
              height: '15px',
              borderRadius: '3px',
              backgroundColor: '#4C8DEB',
              mr: '5px',
            }}
          ></Badge>
          Action
        </Typography>
        <Typography fonstSize="12px" mr="5px">
          <Badge
            badgeContent=" "
            sx={{
              width: '15px',
              height: '15px',
              borderRadius: '3px',
              backgroundColor: '#5AD6B0',
              mr: '5px',
            }}
          ></Badge>
          Comedy
        </Typography>
        <Typography fonstSize="12px" mr="5px">
          <Badge
            badgeContent=" "
            sx={{
              width: '15px',
              height: '15px',
              borderRadius: '3px',
              backgroundColor: '#FFAB49',
              mr: '5px',
            }}
          ></Badge>
          Romantic
        </Typography>
        <Typography fonstSize="12px" mr="5px">
          <Badge
            badgeContent=" "
            sx={{
              width: '15px',
              height: '15px',
              borderRadius: '3px',
              backgroundColor: '#EE5D70',
              mr: '5px',
            }}
          ></Badge>
          Drama
        </Typography>
      </FlexBetween>
    </Box>
  );
};
export default CategoryChart;

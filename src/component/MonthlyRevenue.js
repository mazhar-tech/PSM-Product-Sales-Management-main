import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ProgressBar from "@ramonak/react-progress-bar";
import '../style/dashboard.scss'

const MonthlyOrder = [
    {
        label: 'January'
    },
    {
        label: 'Febuary',
    },
    {
        label: 'March'
    },
    {
        label: 'April'
    },
    {
        label: 'May'
    },
    {
        label: 'June'
    },
    {
        label: 'July'
    },
    {
        label: 'August'
    },
    {
        label: 'September'
    },
    {
        label: 'October'
    },
    {
        label: 'November'
    },
    {
        label: 'December'
    },
    ]
const MonthlyRevenue = () => {
  const [age, setAge] = useState("January");

  const handleChange = (event) => {
    setAge(event.target.value);
    
  };
//   let month= age
  

  return (
    <div className="linear_bar">
      <div className="order_head">
        <Typography variant="h6" component="div" gutterBottom>
          Monthly Revenue
        </Typography>
        <Select
          sx={{ width: 130 }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
          style={{ margin: "7px"}}>
          {MonthlyOrder.map((month) => {
            return (
              <MenuItem value={month.label} key={month.label}>
                {month.label}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <Divider />
      <div className="progress_bar">
      <Typography variant="h6" component="div" gutterBottom>
        Week 1
      </Typography>
      <ProgressBar completed={30} bgColor="#ca2129" className="progress" />
      <Typography variant="h6" component="div" gutterBottom>
        Week 2
      </Typography>
      <ProgressBar completed={90} bgColor="green" className="progress" />
      <Typography variant="h6" component="div" gutterBottom>
        Week 3
      </Typography>
      <ProgressBar completed={49} bgColor="#fbbe36" className="progress" />
      <Typography variant="h6" component="div" gutterBottom>
        Week 4
      </Typography>
      <ProgressBar completed={60} bgColor="green"className="progress" />
      </div>
    </div>
  );
};

export default MonthlyRevenue

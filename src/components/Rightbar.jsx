import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, InputLabel, FormControl, Typography, FormControlLabel, Checkbox, FormGroup } from '@mui/material'
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

const Rightbar = () => {

  const [category, setCategory] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Box flex={2} height="100vh" p={2} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box sx={{ minWidth: 120 }} position="fixed">
        <Typography fontWeight={100} variant="h5">Filter<FilterAltIcon color='primary' /></Typography>
        <FormControl sx={{ m: 1, width: "100%", marginLeft: "0" }}>
          <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category}
            onChange={handleCategory}
            autoWidth
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%", marginLeft: "0" }}>
          <InputLabel id="demo-simple-select-autowidth-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="simple-select-autowidth"
            value={location}
            onChange={handleLocation}
            autoWidth
            label="Location"
          >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Mumbi">Mumbi</MenuItem>
              <MenuItem value="Banglore">Banglore</MenuItem>
          </Select>
        </FormControl>
        <FormGroup sx={{m:2, marginLeft:0}}>
          <FormControlLabel control={<Checkbox/>} label="Work from home" />
          <FormControlLabel control={<Checkbox/>} label="Fresher jobs" />
          <FormControlLabel control={<Checkbox/>} label="Show only 3 LPA+ jobs" />
          <FormControlLabel control={<Checkbox/>} label="Include all internships" />
        </FormGroup>
      </Box>
    </Box>
  )
}

export default Rightbar

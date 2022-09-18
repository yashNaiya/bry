import React, { useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, InputLabel, FormControl, Typography, FormControlLabel, Checkbox, FormGroup, Button } from '@mui/material'
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import MenuLists from '../../config/MenuLists';

const Rightbar = () => {



  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [mode,setMode] = useState('')

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleMode = (event)=>{
    setMode(event.target.value)
  }
  const handleClear = () => {
    setMode('')
    setLocation('')
    setCategory('')
  }

  const handleApply = () => {
    console.log(location, category,mode);
  }
  return (
    <Box flex={2} height="100vh" p={2} sx={{ display: { xs: "none", sm: "block" } }} >
      <form>
        <Box sx={{ minWidth: 120 }} position="fixed">
          <Typography fontWeight={100} m={2} align={'center'} variant="h5">Filter<FilterAltIcon color='primary' /></Typography>
          <FormControl size='small' sx={{ m: 1, width: "100%", marginLeft: "0" }}>
            <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={category}
              onChange={handleCategory}
              label="Category"
            >
              {MenuLists.category.map(item => (
                <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size='small' sx={{ m: 1, width: "100%", marginLeft: "0" }}>
            <InputLabel id="demo-simple-select-autowidth-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="simple-select-autowidth"
              value={location}
              onChange={handleLocation}
              label="Location"
            >
              {MenuLists.location.map(item => (
                <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormGroup sx={{ m: 2, marginLeft: 0 }}>
            {MenuLists.mode.map(item => (
              <FormControlLabel control={<Checkbox />} onChange={handleMode} label={item.name} value={item.value} key={item.value} />

            ))}
          </FormGroup>
          <Box display={'flex'} justifyContent={'space-evenly'}>
            <Button variant='contained' onClick={handleApply}>Apply</Button>
            <Button variant='outlined' onClick={handleClear}>Clear</Button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Rightbar

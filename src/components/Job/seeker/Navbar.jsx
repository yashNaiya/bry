import React, { useEffect } from 'react'
import { AppBar, Avatar, Menu, InputBase, MenuItem, styled, Toolbar, Typography, Box, Button } from '@mui/material'
import { useState } from 'react';
import ReactRoundedImage from "react-rounded-image";
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const viewer = sessionStorage.getItem('viewer')

const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))
const Icons = styled("div")(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))
const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const SERVER_HOST = 'http://localhost:9002/images/'
  const user = JSON.parse(sessionStorage.getItem('sessionData'))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRecruiter = async () =>{
    await sessionStorage.setItem('viewer','1')
    navigate('/addjob',{replace:true})
    console.log(sessionStorage.getItem('viewer'))
    setAnchorEl(null);
  };
  const handleSeeker = async () => {
    await sessionStorage.setItem('viewer','2')
    navigate('/jobpage',{replace:true})
    console.log(sessionStorage.getItem('viewer'))
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () =>{
    sessionStorage.setItem('sessionData',{})
    navigate('/', {replace:true})
  }
  return (
    <AppBar position='sticky' color="secondary" sx={{ boxShadow: "none", paddingY: "1%" }} >
      <StyledToolbar >
        <Typography variant="h6" color="primary" sx={{ display: { xs: "none", sm: "block" } }}>BVM</Typography>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
      <Box display={'flex'} flexDirection={'row'} paddingRight={'3rem'} justifyContent={'space-between'} alignItems={'center'}>
        <Button
        id="basic-button"
        aria-controls={Open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={Open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"#000",display: { xs: "none", sm: "inherit" }}}
        endIcon={<KeyboardArrowDownIcon/>}
      >
        Mode
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleRecruiter}>Recruiter</MenuItem>
        <MenuItem onClick={handleSeeker}>Seeker</MenuItem>
      </Menu>
      <Button sx={{color:"#000", textDecoration:"underline",display: { xs: "none", sm: "block" }}} onClick={handleLogout}>Logout</Button>
      </Box>
        <Icons>
          <ReactRoundedImage image={SERVER_HOST + user.Image} roundedSize="0" imageWidth="50"
            imageHeight="50" />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Typography variant='span'>Yash</Typography>
          <ReactRoundedImage image={SERVER_HOST + user.Image} roundedSize="0" imageWidth="50"
            imageHeight="50" />
        </UserBox>
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Mode</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )

}

export default Navbar


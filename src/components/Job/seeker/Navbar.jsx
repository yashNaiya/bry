import React from 'react'
import { AppBar, Avatar, Menu, InputBase, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';
import ReactRoundedImage from "react-rounded-image";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const SERVER_HOST = 'http://localhost:9002/images/'
const user = JSON.parse(sessionStorage.getItem('sessionData'))


const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "#e1e1e1",
  borderRadius: theme.shape.borderRadius,
  padding: "0 10px",
  width: "30%",

}))
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
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky' color="secondary" sx={{ boxShadow: "none", paddingY: "1%" }} >
      <StyledToolbar >
        <Typography variant="h6" color="primary" sx={{ display: { xs: "none", sm: "block" } }}>BVM</Typography>
        <Searchbar><InputBase placeholder='search..' /></Searchbar>
        <Icons>
        <ReactRoundedImage image={SERVER_HOST + user.Image} roundedSize="0" imageWidth="50"
  imageHeight="50" />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Typography variant='span'>Yash</Typography>
          <Avatar sx={{ width: "30px", height: "30px" }} />
        </UserBox>
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
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar


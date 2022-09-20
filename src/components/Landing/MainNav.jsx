import { AppBar, styled, Toolbar, Typography, Button, Box } from '@mui/material'



import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Register from './Register'

const MainNav = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })
   
    const handleClick = function (e) {
        setShow(false)
    }
    const [show, setShow] = useState(true)
    if(show){
        return( < Box >
            <AppBar position='sticky' color="secondary" sx={{ paddingY: "1%" }}>
                <StyledToolbar >
                    <Typography variant="h4" color="primary" sx={{ display: { xs: "none", sm: "block" } }}>BVM</Typography>
                    <Button variant='contained' NavLink to={'/register'} onClick={handleClick}>Register</Button>
                </StyledToolbar>
            </AppBar>
            </Box >)
    }
    else
        return(<Register setShow={setShow}/>)
}

export default MainNav

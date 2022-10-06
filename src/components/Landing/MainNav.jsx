import { AppBar, styled, Toolbar, Typography, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'
const MainNav = () => {
    const navigate = useNavigate()
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const handleClick = function (e) {
        navigate('/register')
    }
        return (< Box >
            <AppBar position='sticky' color="secondary" sx={{ paddingY: "1%" }}>
                <StyledToolbar>
                    <Typography variant="h4" color="primary" sx={{ display: { xs: "none", sm: "block" } }}>BVM</Typography>
                        <Button variant='contained' onClick={handleClick}>Register</Button>
                </StyledToolbar>
            </AppBar>
        </Box >)
}

export default MainNav

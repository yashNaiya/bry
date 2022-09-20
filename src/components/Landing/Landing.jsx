import React, { useState } from 'react'
import { Box, Typography, Button, styled } from '@mui/material'
import Login from './Login'
import MainNav from './MainNav'
import { Stack } from '@mui/system'
import image from '../../assets/landing.svg'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  const LoginLink = styled(NavLink)({
    textDecoration:'none'
})

    return (
      <Box>
        <MainNav />
        <Box paddingX="5%" paddingY="10%"
          sx={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <Stack direction={'row'}
            margin='auto'
            justifyContent={'space-around'}
            p={8}>
            <LoginLink to={'/login'}>
            <Button
              color={'secondary'}
              NavLink to={'/login'}
              variant={'contained'}>
              <Typography variant='h4' fontWeight={100} padding={3}>Want The Job?</Typography>
            </Button>
            </LoginLink>
            <LoginLink to={'/login'}>
            <Button
              color={'primary'}
              variant={'contained'}>
              <Typography variant='h4' fontWeight={100} padding={3}>Want To Hier?</Typography>
            </Button>
            </LoginLink>
          </Stack>
        </Box>
      </Box>
    )
}

export default Landing

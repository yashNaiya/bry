import React from 'react'
import { Box, Typography, Button, styled } from '@mui/material'
import MainNav from './MainNav'
import { Stack } from '@mui/system'
import image from '../../assets/landing.svg'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  const LoginLink = styled(NavLink)({
    textDecoration:'none'
})

    const setSeeker = () =>{
      sessionStorage.setItem('viewer','2')
    }

    const setRecruiter = () =>{
      sessionStorage.setItem('viewer','1')
    }


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
              onClick={setSeeker}
              color={'secondary'}
              variant={'contained'}>
              <Typography variant='h4' fontWeight={100} padding={3}>Want The Job?</Typography>
            </Button>
            </LoginLink>
            <LoginLink to={'/login'}>
            <Button
              onClick={setRecruiter}
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

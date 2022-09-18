import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Login from './Login'
import MainNav from './MainNav'
import { Stack } from '@mui/system'

const Landing = () => {

  const [show, setShow] = useState(true)
  const onCardClick = function (e) {
    setShow(false)
  }

  if (show) {
    return (
      <Box>
        <MainNav />
        <Box paddingX="5%" paddingY="10%" sx={{ paddingX: { sm: "0" } }} >
          <Stack direction={'row'}
            spacing={4} justifyContent="space-around" p={8}>
            <Button
              color={'primary'}
              onClick={onCardClick}
              variant={'contained'}>
              <Typography variant='h4' fontWeight={100} padding={3}>Want The Job?</Typography>
            </Button>
            <Button
              color={'primary'}
              variant={'contained'}
              onClick={onCardClick}>
              <Typography variant='h4' fontWeight={100} padding={3}>Want To Hier?</Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
    )
  }
  else {
    return (
      <Login setChange={setShow} />
    )
  }
}

export default Landing

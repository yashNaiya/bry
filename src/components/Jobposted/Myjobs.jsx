import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'


const Myjobs = (props) => {

  // const handleClick = ()=>{
  //   props.showPost(true)
  // }
  const handleView = ()=>{
    props.showPost(true)
  }

   const user = JSON.parse(sessionStorage.getItem('sessionData'))
   console.log(user._id)

  return (
    <Box
      flex={6}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-evenly'}
      flexWrap={'wrap'}>
      <Card sx={{
        margin: '3rem',
        minWidth: 345, 
        maxHeight: 200, 
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;",
      }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Company Name
          </Typography>
          <Typography variant="h5" component="div">
            Job Title
          </Typography>

          <Typography sx={{ mt: 1.5 }} variant="body2">
            Date Posted :
            <br />
            {'Total Applications :'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleView}>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Myjobs
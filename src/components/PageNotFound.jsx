import { Box, Button, Link } from '@mui/material'
import React from 'react'
import image from '../assets/404.svg'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
      <img height={"500"} src={image} />
        <Button onClick={()=>{navigate('/', {replace:true})}} sx={{color:'#7E57C2'}}>Go To Home</Button>
    </Box>
  )
}

export default PageNotFound
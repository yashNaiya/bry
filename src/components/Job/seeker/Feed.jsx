import React from 'react'
import {Box } from '@mui/material'
import Post from './Post'
const Feed = (props) => {
  return (
    <Box flex={4} p={2} >
      <Post filter={props.filter} setJob={props.setJob} showPost={props.showPost}/>
    </Box>
  )
}

export default Feed


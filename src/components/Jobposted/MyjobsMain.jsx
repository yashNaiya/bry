import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../Job/seeker/Navbar'
import PostPage from '../Job/seeker/PostPage'
import Sidebar from '../Sidebar'
import JobDetail from './JobDetail'
import Myjobs from './Myjobs'


const MyjobsMain = () => {
    const [job,setJob] = useState()
    const [post,showPost] = useState(false)
    if(post){
        return(
          <JobDetail job={job} showPost={showPost}/>
        )
      }
      else{

          return (
              <Box>
                  <Navbar />
                  <Box paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
                      <Stack direction="row" spacing={4} justifyContent="space-between">
                          <Sidebar />
                          <Myjobs showPost={showPost} setJob={setJob} />
                      </Stack>
                  </Box>
              </Box>
          )
      }
    
}

export default MyjobsMain
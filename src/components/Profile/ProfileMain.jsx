import React from 'react'
import Sidebar from '../Job/Sidebar'
import Profile from './Profile'
import { Box, Stack } from "@mui/material"
import Navbar from "../Job/Navbar"

const ProfileMain = () => {
  return (
    <Box paddingBottom={"5"}>
      <Navbar/>
    <Box paddingX="5%" sx={{paddingX:{sm:"0"}}}>
      <Stack direction="row" spacing={4} justifyContent="space-between">
        <Sidebar/>
        <Profile />
      </Stack>
    </Box>
  </Box>
  )
}

export default ProfileMain

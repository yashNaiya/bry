import React from 'react'
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Sidebar from "../../Sidebar";
import { Box, Stack } from "@mui/material"
import Navbar from "./Navbar"


const JobMain = () => {
  return (
    <Box>
      <Navbar />
      <Box paddingX="5%" sx={{paddingX:{sm:"0"}}}>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </Box>
  )
}

export default JobMain
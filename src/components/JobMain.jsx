import React from 'react'
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidbaer";
import { Box, Stack } from "@mui/material"
import Navbar from "./Navbar"
// import Login from "./components/Login";
// import Landing from "./components/Landing";

const JobMain = () => {
  return (
    <Box>
      <Navbar />
      <Box paddingX="5%" paddingY="2%" sx={{paddingX:{sm:"0"}}}>
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

import React, { useState } from 'react'
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Sidebar from "../../Sidebar";
import { Box, Stack } from "@mui/material"
import Navbar from "./Navbar"


const JobMain = () => {

  const [filter, setFilter] = useState({
    mode:"",
    location:"",
    category:""
  });

  return (
    <Box>
      <Navbar />
      <Box paddingX="5%" sx={{paddingX:{sm:"0"}}}>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Sidebar />
          <Feed filter={filter}  />
          <Rightbar filter={filter} setFilter={setFilter}/>
        </Stack>
      </Box>
    </Box>
  )
}

export default JobMain

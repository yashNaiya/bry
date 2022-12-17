import React from 'react'
import { Box, Stack } from "@mui/material"
import Navbar from "../Job/seeker/Navbar"
import Sidebar from '../Sidebar'
import Directory from './Directory'
import Filter from './Filter'
import {useState} from 'react'

const DirectoryMain = () => {
  const [filter, setFilter] = useState({
    role:"",
    joining:"",
    graduating:"",
    dept:"",
    cur_loc:""
})
  return (
    <Box>
            <Navbar />
            <Box paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
                <Stack direction="row" spacing={4} justifyContent="space-between">
                    <Sidebar />
                    <Directory filter={filter}/>
                    <Filter setFilter={setFilter} filter={filter}/>
                </Stack>
            </Box>
        </Box>
  )
}

export default DirectoryMain

import React from 'react'
import { Box, Stack } from "@mui/material"
import Navbar from "../Job/seeker/Navbar"
import Sidebar from '../Sidebar'
import Directory from './Directory'

const DirectoryMain = () => {
  return (
    <Box>
            <Navbar />
            <Box paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
                <Stack direction="row" spacing={4} justifyContent="space-between">
                    <Sidebar />
                    <Directory/>
                </Stack>
            </Box>
        </Box>
  )
}

export default DirectoryMain

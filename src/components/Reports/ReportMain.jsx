import React from 'react'
import { Box, Stack } from "@mui/material"
import Navbar from "../Job/seeker/Navbar"
import Sidebar from '../Sidebar'
import Report from './Report'

const ReportMain = () => {
    return (
        <Box>
            <Navbar />
            <Box paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
                <Stack direction="row" spacing={4} justifyContent="space-between">
                    <Sidebar />
                    <Report />
                </Stack>
            </Box>
        </Box>
    )
}

export default ReportMain

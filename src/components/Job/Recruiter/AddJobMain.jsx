import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../seeker/Navbar'
import AddJob from './AddJob'

const AddJobMain = () => {
    return (
        <Box>
            <Navbar />
            <Box paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
                <Stack direction="row" spacing={4} justifyContent="space-between">
                    <Sidebar />
                    <AddJob />
                </Stack>
            </Box>
        </Box>
    )
}

export default AddJobMain

import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../Job/seeker/Navbar'
import Sidebar from '../Sidebar'
import Authenticate from './Authenticate'

const AuthenitcateMain = () => {
    return (
        <Box>
            <Navbar />
            <Box paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
                <Stack direction="row" spacing={4} justifyContent="space-between">
                    <Sidebar />
                    <Authenticate/>
                </Stack>
            </Box>
        </Box>
    )
}

export default AuthenitcateMain
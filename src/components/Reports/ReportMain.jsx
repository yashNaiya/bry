import React, { useState } from 'react'
import { Box, Stack } from "@mui/material"
import Navbar from "../Job/seeker/Navbar"
import Sidebar from '../Sidebar'
import Report from './Report'
import UserCard from '../UserCard'

const ReportMain = () => {

    const [user, setUser] = useState()
    const [showCard, setCard] = useState(false)
    if (showCard) {
        return (

            <UserCard setCard={setCard} user={user} setUser={setUser} showCard={showCard}/>
        )
    }
    else {
        return (
            <Box>
                <Navbar />
                <Box paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
                    <Stack direction="row" spacing={4} justifyContent="space-between">
                        <Sidebar />
                        <Report setCard={setCard} user={user} setUser={setUser} showCard={showCard} />
                    </Stack>
                </Box>
            </Box>
        )
    }
}

export default ReportMain

import { Box } from '@mui/material'
import React from 'react'
import Card from './Card'

const Directory = () => {
    return (
        <Box flex={4}
            display='flex'
            flexDirection={'row'}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
            sx={{
                padding: { xs: 'none', sm: '10px' }
            }}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Box>
    )
}

export default Directory

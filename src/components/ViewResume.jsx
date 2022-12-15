import React from 'react'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
const ViewResume = () => {
    const [resume, setResume] = useState()
    useEffect(() => {
        setResume(localStorage.getItem("viewedResume"))

    }, [])
    return (
        <Box>
            {resume}
        </Box>
    )
}

export default ViewResume

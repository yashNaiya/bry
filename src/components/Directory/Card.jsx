import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import image from '../../assets/demo.jpg'
import ReactRoundedImage from "react-rounded-image";
import axios from 'axios';

const Card = (props) => {
    const SERVER_HOST = 'http://localhost:9002/images/'
    return (
        <Box m={'25px'} display='flex' flexDirection={'column'} alignItems='center' borderRadius={'10px'} sx={{ width: "210px", height: "250px", boxShadow: "#676767 0px 0px 15px 0px" }}>
            <Box sx={{ transform: 'translateY(-30%)' }}>
                    <ReactRoundedImage onClick={console.log('hii')} image={SERVER_HOST+props.data.Image} roundedSize="0" imageWidth="110"
                        imageHeight="110" />
            </Box>
            <Typography variant='h6'>{props.data.name}</Typography>
            <Typography variant='subtitle1'>Current Location {props.data.Curr_loc}</Typography>
            <Typography variant='caption'>Class of {props.data.Batch}</Typography>
            <Button onClick={props.handleChat} sx={{ marginTop: "10px", color: '#000' }}>Message</Button>
        </Box>
    )
}

export default Card
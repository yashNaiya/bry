import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ReactRoundedImage from "react-rounded-image";
import axios from 'axios';
const Card = (props) => {
    const SERVER_HOST = 'http://localhost:9002/images/'
    const handleView = ()=>{
        // console.log("hii")
        axios.get(`/register/${props.data.email}`)
        .then(function (response) {

          localStorage.setItem("viewedProfile",JSON.stringify(response.data))
        })
        .catch(err => console.log(err));

       window.open('/viewProfile2', '_blank', 'noopener,noreferrer');
    }
    return (
        
        <Box m={'25px'} display='flex' flexDirection={'column'} alignItems='center' borderRadius={'10px'} sx={{ width: "210px", height: "250px", boxShadow: "#676767 0px 0px 15px 0px" }}>
            <Box sx={{ transform: 'translateY(-30%)' }}>
                    <ReactRoundedImage image={SERVER_HOST+props.data.Image} roundedSize="0" imageWidth="110"
                        imageHeight="110" />
            </Box>
            <Typography variant='h6'>{props.data.name}</Typography>
            <Typography variant='subtitle1'>Current Location {props.data.Curr_loc}</Typography>
            <Typography variant='caption'>Class of {props.data.Batch}</Typography>
            <Button onClick={handleView} sx={{ marginTop: "10px", color: '#000' }}>View</Button>
        </Box>
    )
}

export default Card
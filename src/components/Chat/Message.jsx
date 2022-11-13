import { Box, styled, TextField, Typography } from '@mui/material'
import { maxWidth } from '@mui/system'
import React from 'react'
import image from '../../assets/pngegg.png'

const Message = (props) => {
    const MessageTop = styled("div")(({ theme }) => ({
        display:"flex",
        flexDirection:"row",
        alignItems:"initial"
    }))
    const MessageBottom = styled("div")(({ theme }) => ({
        fontSize:"12px",
        marginTop:"10px"
    }))
    if(!props.own){
        return (
            <Box marginTop={"20px"} width={"100%"} display={"flex"} flexDirection={"column"}>
                <MessageTop>
                    <img width={"32px"} height={"32px"} borderRadius={"50%"} objectFit={"cover"} src={image} alt=''/>
                    <Typography maxWidth={"300px"} display={"flex"} flexWrap={"wrap"} p={"10px"} borderRadius={"20px"} sx={{marginX:"10px", backgroundColor:"primary.main", color:"#fff"}}>this is message</Typography>
                </MessageTop>
                <MessageBottom>1 hour ago</MessageBottom>
            </Box>
        )
    }
    else{
        return (
            <Box marginTop={"20px"} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
                <MessageTop>
                    <Typography maxWidth={"300px"} display={"flex"} flexWrap={"wrap"} p={"10px"} borderRadius={"20px"} sx={{marginX:"10px", backgroundColor:"#D3D3D3"}}>this is message</Typography>
                    <img width={"32px"} height={"32px"} borderRadius={"50%"} objectFit={"cover"} src={image} alt=''/>
                </MessageTop>
                <MessageBottom>1 hour ago</MessageBottom>
            </Box>
        )  
    }
}

export default Message
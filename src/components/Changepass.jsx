import React from 'react'
import { Box, Typography, TextField, Button, } from '@mui/material'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Changepass = (props) => {

    const [showOtp, setOpt] = useState(false)
    const [inputs, setinputs] = useState({
        email: "",
        newPass: "",
        changePass: "",
        otp: ""
    })
    const onGetotpClick = () => {
        setOpt(true)
    }
    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }

    const handleSubmit = async()=>{
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                flexDirection={'column'}
                maxWidth={300}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc"
                    }
                }}
            >
                <Box display="flex" sx={{ alignItems: "center" }}>
                    <Button onClick={props.handleForgot}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography variant='h5' fontWeight={100} padding={3}>{"Change"}</Typography>
                </Box>
                <TextField
                    autoComplete='off'
                    value={inputs.email}
                    onChange={handleChange}
                    name='email'
                    size='small' margin='normal' type={"email"} placeholder='Email' />
                <Button variant='contained' sx={{ marginTop: 3 }} onClick={onGetotpClick}>{"get otp"}</Button>
                {showOtp &&
                    <>
                        <TextField
                            autoComplete='off'
                            name='otp'
                            value={inputs.otp}
                            onChange={handleChange}
                            size='small' margin='normal' type={"number"} placeholder='OTP' />
                        <TextField
                            autoComplete='off'
                            name='changePass'
                            value={inputs.changePass}
                            onChange={handleChange}
                            size='small' margin='normal' type={"password"} placeholder='Change Password' />
                        <TextField
                            autoComplete='off'
                            name='newPass'
                            value={inputs.newPass}
                            onChange={handleChange}
                            size='small' margin='normal' type={"password"} placeholder='Confirm' />
                        <Button variant='contained' sx={{ marginTop: 3 }} type={"submit"}>{"Change"}</Button>
                    </>}
            </Box>
        </form>
    )
}

export default Changepass

import React from 'react'
import { Box, Typography, TextField, Button, Link } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import axios from 'axios';

const Forgotpassword = () => {

    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }

    const handleSubmit = () =>{

    }

    const [inputs, setinputs] = useState({
        password: "",
        confirmPass:""
    })
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
                    <Link href="/">
                        <Button>
                            <ArrowBackIcon />
                        </Button>
                    </Link>
                    <Typography variant='h5' fontWeight={100} padding={3}>{"Change"}</Typography>
                </Box>
                <TextField
                    autoComplete='off'
                    value={inputs.password}
                    onChange={handleChange}
                    name='password'
                    size='small' margin='normal' type={"password"} placeholder='New Password' />
                <TextField
                    autoComplete='off'
                    value={inputs.confirmPass}
                    onChange={handleChange}
                    name='confirmPass'
                    size='small' margin='normal' type={"password"} placeholder='Confirm Password' />
                <Button variant='contained' sx={{ marginTop: 3 }} type={"submit"}>{"Change"}</Button>

            </Box>
        </form>
    )
}

export default Forgotpassword

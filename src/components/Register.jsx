import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';


const Register = (props) => {
    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }

    const [inputs, setinputs] = useState({
        name: "",
        email: "",
        password: "",
        number: "",
        ID: "",
        rePass: "",
        batch: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, number,ID,rePass,batch} = inputs
         if (name && email && password && number && ID && batch && (password[0]===rePass[0])){
            axios.post("/register", inputs)
                .then(res => alert(res.data.message))
        } else {
            alert("Invalid Input")
        }

    }
    return (
        <form onSubmit={handleSubmit} >
            <Box
                display='flex'
                flexDirection={'column'}
                alignItems='center'
                borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc"
                    }
                }}
                maxWidth={700}
                margin="auto"
                marginTop={5}
                padding={3}>
                <Box display="flex" sx={{ alignItems: "center", margin: 'auto' }}>
                    <Button onClick={props.setShow}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography variant='h5' fontWeight={100} padding={3}>Signup</Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection={'row'}
                    alignItems="center"
                    justifyContent={"space-evenly"}


                >

                    <Box display='flex' flexDirection={'column'} p={2}>
                        <TextField
                            autoComplete='off'
                            name='name'
                            onChange={handleChange}
                            value={inputs.name}
                            size='small' margin='normal' type={"text"} placeholder='Name' />
                        <TextField
                            autoComplete='off'
                            name='number'
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }}
                            onChange={handleChange}
                            value={inputs.number}
                            size='small' margin='normal' type={"number"} placeholder='Number' />
                        <TextField
                            autoComplete='off'
                            name='ID'
                            onChange={handleChange}
                            value={inputs.ID}
                            size='small' margin='normal' type={"text"} placeholder='ID' />
                    </Box>
                    <Box display='flex' flexDirection={'column'} p={2}>
                        <TextField
                            autoComplete='off'
                            value={inputs.email}
                            onChange={handleChange}
                            name='email'
                            size='small' margin='normal' type={"email"} placeholder='Email' />
                        <TextField
                            autoComplete='off'
                            name='password'
                            value={inputs.password}
                            onChange={handleChange}
                            size='small' margin='normal' type={"password"} placeholder='Password' />
                        <TextField
                            autoComplete='off'
                            name='rePass'
                            value={inputs.rePass}
                            onChange={handleChange}
                            size='small' margin='normal' type={"password"} placeholder='Confirm Password' />
                    </Box>

                    {/* <Button sx={{ marginTop: 3 }} onClick={handleReset}>{"Signup"}</Button> */}
                </Box>
                <Box display='flex' alignItems='center'>
                    <TextField
                        autoComplete='off'
                        name='batch'
                        onChange={handleChange}
                        value={inputs.batch}
                        size='small' margin='normal' type={"text"} placeholder='Batch' />
                </Box>
                <Button type="submit" variant='contained' sx={{ marginTop: 3 }}>Signup</Button>
            </Box>
        </form>
    )
}

export default Register

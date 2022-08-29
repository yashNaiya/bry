import React from 'react'
import { Box, Typography, TextField, Button, } from '@mui/material'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        number: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)
        // const { name, email, password, number} =inputs
        // if(isSignup){
        //    const result = await fetch('/api/regiser',{
        //         method:"POST",
        //         headers:{
        //             'Content-Type':'application/json'
        //         },
        //         body:JSON.stringify({
        //             name,
        //             email,
        //             password
        //         })
        //     }).then((res)=>res.json())
        // }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                flexDirection={'column'}
                maxWidth={400}
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
                    <Button onClick={props.setShow}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography variant='h5' fontWeight={100} padding={3}>Signup</Typography>
                </Box>
                <TextField
                    name='name'
                    onChange={handleChange}
                    value={inputs.name}
                    size='small' margin='normal' type={"text"} placeholder='Name' />
                <TextField
                    name='number'
                    onChange={handleChange}
                    value={inputs.number}
                    size='small' margin='normal' type={"text"} placeholder='Number' />
                <TextField
                    value={inputs.email}
                    onChange={handleChange}
                    name='email'
                    size='small' margin='normal' type={"email"} placeholder='Email' />
                <TextField
                    name='password'
                    value={inputs.password}
                    onChange={handleChange}
                    size='small' margin='normal' type={"password"} placeholder='Password' />
                <Button type="submit" variant='contained' sx={{ marginTop: 3 }}>Signup</Button>
                {/* <Button sx={{ marginTop: 3 }} onClick={handleReset}>{"Signup"}</Button> */}
            </Box>
        </form>
    )
}

export default Register

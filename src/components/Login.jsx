import { Box, Typography, TextField, Button, } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios"


const Login = (props) => {
    const [isSignup, setisSignup] = useState(false)

    const [inputs, setinputs] = useState({
        name: "",
        email: "",
        password: "",
        number: ""
    })

    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)
        const { email , password} = inputs
        if (email && password){
           alert("posted")
           axios.post("/login",inputs)
           .then(res => alert(res.data.message) )
        }else{
           alert("Invalid Input")}


        // const { name, email, password} =inputs
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

    const handleReset = (e) => {
        setisSignup(!isSignup);
        setinputs({
            name: "", email: "", password: ""
        })
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
                    <Button onClick={props.setChange}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography variant='h5' fontWeight={100} padding={3}>{isSignup ? "Signup" : "Login"}</Typography>
                </Box>
                {isSignup && (<><TextField
                    name='name'
                    autoComplete='off'
                    onChange={handleChange}
                    value={inputs.name}
                    size='small' margin='normal' type={"text"} placeholder='Name' />
                    <TextField
                        name='number'
                        autoComplete='off'
                        onChange={handleChange}
                        value={inputs.number}
                        size='small' margin='normal' type={"text"} placeholder='Number' />
                </>)}
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
                <Button type="submit" variant='contained' sx={{ marginTop: 3 }}>{isSignup ? "Signup" : "Login"}</Button>
                <Button sx={{ marginTop: 3 }} onClick={handleReset}>{isSignup ? "Login" : "Signup"}</Button>
            </Box>
        </form>
    )
}

export default Login

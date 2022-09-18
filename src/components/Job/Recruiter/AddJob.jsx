import React from 'react'
import { Box, Typography, TextField, Button, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



const AddJob = (props) => {
    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }
    const [age, setAge] = React.useState('');
    const [inputs, setinputs] = useState({
        tittle: "",
        type: "",
        Cname:"",
        Jdes:"",
        CWeb:"",
        Salary:""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)

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
                maxWidth={1000}
                margin="auto"
                marginTop={5}
                padding={3}>
                <Box display="flex" sx={{ alignItems: "center", margin: 'auto' }}>
                    <Button>
                        <ArrowBackIcon />
                    </Button>
                    <Typography variant='h5' fontWeight={100} padding={3}>Add Job</Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection={'row'}
                    alignItems="center"
                    justifyContent={"space-evenly"}>

                    <Box display='flex' flexDirection={'column'} p={2}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                        name='type'
                            value={age}
                            label="Type"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Job'}>Job</MenuItem>
                            <MenuItem value={'Internship'}>Internship</MenuItem>
                        </Select>
                        </FormControl>

                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Salary</InputLabel>
                        <Select
                        name='Salary'
                            value={age}
                            label="Salary"
                            onChange={handleChange}
                        >
                            <MenuItem value={'2-4'}>2-4</MenuItem>
                            <MenuItem value={'4-6'}>4-6</MenuItem>
                            <MenuItem value={'6-8'}>6-8</MenuItem>
                            <MenuItem value={'8+'}>8+</MenuItem>
                        </Select>
                        </FormControl>
                        <TextField
                            autoComplete='off'
                            name='tittle'
                            onChange={handleChange}
                            value={inputs.name}
                            size='small' margin='normal' type={"text"} placeholder='Job Tittle' />
                            <TextField
                            autoComplete='off'
                            name='Cname'
                            onChange={handleChange}
                            value={inputs.Cname}
                            size='small' margin='normal' type={"text"} placeholder='Company Name' />
                        
                    </Box>
                    <Box display='flex' flexDirection={'column'} p={2}>
                        <TextField
                            autoComplete='off'
                            name='JDes'
                            value={inputs.JDes}
                            onChange={handleChange}
                            size='small' margin='normal' type={"password"} placeholder='Job Description'
                            multiline
                            rows={4}
                            Width={100}
                            
                            />
                            <TextField
                            autoComplete='off'
                            name='CWeb'
                            onChange={handleChange}
                            value={inputs.Cname}
                            size='small' margin='normal' type={"text"} placeholder='Company Website' />
                        {/* <TextField
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
                            size='small' margin='normal' type={"password"} placeholder='Confirm Password' /> */}
                    </Box>
                        

                    {/* <Button sx={{ marginTop: 3 }} onClick={handleReset}>{"Signup"}</Button> */}
                </Box>
                <Button type="submit" variant='contained' sx={{ marginTop: 3 }}>Add Job</Button>
            </Box>
        </form>
    )
}

export default AddJob
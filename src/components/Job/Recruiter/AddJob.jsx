import React from 'react'
import { Box, Typography, TextField, Button, MenuItem, Select, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import image from '../../../assets/job.svg'
import axios from 'axios';


const AddJob = (props) => {
    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }
    const [inputs, setinputs] = useState({
        tittle: "",
        type: "",
        Cname: "",
        Jdes: "",
        Cweb: "",
        salary: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)
        const { tittle, type, Cname, Jdes,Cweb,salary} = inputs
        if (tittle && type && Cname && Jdes && Cweb && salary ){
           axios.post("/addjob", inputs)
               .then(res => alert(res.data.message))
       } else {
           alert("Invalid Input")
       }

    }
    return (
        <Box
            flex={6}
            display='flex'
            flexDirection={'row'}
            alignItems='flex-start'
            borderRadius={5}
            sx={{
                padding: { xs: 'none', sm: '10px' }
            }
            }
            maxWidth={1000}
            margin="auto"
            marginTop={5}
            padding={3}>
            <form onSubmit={handleSubmit} >
                <Box display="flex" sx={{ alignItems: "center", margin: 'auto' }}>
                    <Typography variant='h4' color={'primary'} fontWeight={100} padding={4}>Add Job</Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection={'column'}
                    alignItems="flex-start"
                    justifyContent={"space-evenly"}>
                    <Box minWidth={300} display='flex' flexDirection={'column'} p={2}>

                    <FormControl
                            margin='normal'
                            fullWidth
                            variant='filled'>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select

                                name='type'
                                value='type'
                                label="type"
                                size='small'
                                onChange={handleChange}
                            >
                                <MenuItem value={'Internship'}>Internship</MenuItem>
                                <MenuItem value={'Job'}>JOb</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl
                            margin='normal'
                            fullWidth
                            variant='filled'>
                            <InputLabel id="demo-simple-select-label">Salary</InputLabel>
                            <Select

                                name='salary'
                                value='salary'
                                label="salary"
                                size='small'
                                onChange={handleChange}
                            >
                                <MenuItem value={'2-4'}>2-4</MenuItem>
                                <MenuItem value={'4-6'}>4-6</MenuItem>
                                <MenuItem value={'6-8'}>6-8</MenuItem>
                                <MenuItem value={'8+'}>8+</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            margin='normal'
                            autoComplete='off'
                            name='tittle'
                            fullWidth
                            variant='filled'
                            onChange={handleChange}
                            value={inputs.tittle}
                            size='small' type={"text"} placeholder='Job Tittle' />
                        <TextField
                            autoComplete='off'
                            name='Cname'
                            fullWidth
                            variant='filled'
                            onChange={handleChange}
                            value={inputs.Cname}
                            size='small' margin='normal' type={"text"} placeholder='Company Name' />

                        <TextField
                            autoComplete='off'
                            name='Jdes'
                            value={inputs.Jdes}
                            onChange={handleChange}
                            size='small' margin='normal' type={"password"} placeholder='Job Description'
                            multiline
                            fullWidth
                            variant='filled'
                        />
                        <TextField
                            autoComplete='off'
                            name='Cweb'
                            fullWidth
                            variant='filled'
                            onChange={handleChange}
                            value={inputs.Cweb}
                            size='small' margin='normal' type={"text"} placeholder='Company Website' />
                    </Box>
                </Box>
                <Box display="flex" flexDirection={'column'} sx={{ alignItems: "center", margin: '10px' }}>
                    <Button type="submit" variant='contained' sx={{ marginTop: 3 }}>Update</Button>
                </Box>
            </form>
            <>
                <img src={image} alt={'img'} height={'50%'} paddingTop={'30px'} width='auto' />
            </>
        </Box>
    )
}

export default AddJob
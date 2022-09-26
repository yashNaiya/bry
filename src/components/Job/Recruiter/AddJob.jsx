import React from 'react'
import { Box, Typography, TextField, Button, MenuItem, Select, RadioGroup, Radio, FormControlLabel, FormLabel, Checkbox } from '@mui/material'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import image from '../../../assets/job.svg'
import MenuLists from '../../../config/MenuLists';
import axios from 'axios';


const AddJob = () => {
    const user = JSON.parse(sessionStorage.getItem('sessionData'))
    const [isChecked, setIsChecked] = useState(true);
    const handleCheck = () => {
        isChecked === "true" ? setIsChecked("false") : setIsChecked("true")
        inputs.workFromHome = isChecked
    };

    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }
    const [inputs, setinputs] = useState({
        _id: user._id,
        recruterName:user.name,
        recruterDesignation:user.Designation,
        type: "",
        title: "",
        salary: "",
        companyName: "",
        jobDescription: "",
        website: "",
        lastDate: "",
        totalOpening: "",
        experiance: "",
        workFromHome: "false"
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/AddJob", user).then(res => alert(res.data.message))
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
                            margin='normal'>
                            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={inputs.type}
                                onChange={handleChange}
                                name="type"
                                row>
                                <FormControlLabel value="job" control={<Radio />} label="Full time" />
                                <FormControlLabel value="internship" control={<Radio />} label="Internship" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            margin='normal'
                            autoComplete='off'
                            name='title'
                            fullWidth
                            variant='filled'
                            onChange={handleChange}
                            value={inputs.title}
                            size='small' type={"text"} label='Job Tittle' />
                        <TextField
                            margin='normal'
                            autoComplete='off'
                            name='totalOpening'
                            fullWidth
                            variant='filled'
                            onChange={handleChange}
                            value={inputs.totalOpening}
                            size='small' type={"number"} label='Total Opening'
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }} />
                        <FormControl size='small' sx={{ m: 1, width: "100%", marginLeft: "0" }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Salary</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={inputs.salary}
                                variant={'filled'}
                                onChange={handleChange}
                                label="Salary"
                                name="salary"
                            >
                                {MenuLists.salary.map(item => (
                                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            autoComplete='off'
                            name='companyName'
                            fullWidth
                            variant='filled'
                            onChange={handleChange}
                            value={inputs.companyName}
                            size='small' margin='normal' type={"text"} label='Company Name' />

                        <TextField
                            autoComplete='off'
                            name='jobDescription'
                            value={inputs.jobDescription}
                            onChange={handleChange}
                            size='small' margin='normal' type={"password"} label='Job Description'
                            multiline
                            fullWidth
                            variant='filled'
                        />
                        <TextField
                            autoComplete='off'
                            name='website'
                            fullWidth
                            variant='filled'
                            onChange={handleChange}
                            value={inputs.website}
                            size='small' margin='normal' type={"text"} label='Company Website' />

                        <TextField
                            size='small'
                            margin='normal'
                            label="Last Date"
                            type="date"
                            name="lastDate"
                            variant='filled'
                            value={inputs.lastDate}
                            onChange={handleChange}
                            defaultValue="2017-05-24"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormControl size='small' sx={{ m: 1, width: "100%", marginLeft: "0" }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Experience</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={inputs.experiance}
                                variant={'filled'}
                                onChange={handleChange}
                                label="experience"
                                name="experience"
                            >
                                {MenuLists.experience.map(item => (
                                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            defaultChecked={false}
                            value={isChecked}
                            onChange={handleCheck}
                            control={<Checkbox />} label="Work From Home" />

                    </Box>
                </Box>
                <Box display="flex" flexDirection={'column'} sx={{ alignItems: "center", margin: '10px' }}>
                    <Button type="submit" variant='contained' sx={{ marginTop: 3 }}>Upload</Button>
                </Box>
            </form>
            <>
                <img src={image} alt={'img'} height={'50%'} width='auto' />
            </>
        </Box>
    )
}

export default AddJob
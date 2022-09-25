import React from 'react'
import { Box, Typography, TextField, Button, MenuItem, Select, RadioGroup, Radio, FormControlLabel, FormLabel, Checkbox } from '@mui/material'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import image from '../../../assets/job.svg'
import MenuLists from '../../../config/MenuLists';


const AddJob = () => {

    const [isChecked, setIsChecked] = useState(true);
    const handleCheck = () => {
        isChecked ? setIsChecked(false) : setIsChecked(true)
        inputs.workFromHome = isChecked
    };

    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }
    const [inputs, setinputs] = useState({
        type: "",
        title: "",
        salary: "",
        companyName: "",
        jobDescription: "",
        website: "",
        lastDate: "",
        workFromHome: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
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
                            size='small' type={"text"} placeholder='Job Tittle' />
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
                            size='small' margin='normal' type={"text"} placeholder='Company Name' />

                        <TextField
                            autoComplete='off'
                            name='jobDescription'
                            value={inputs.jobDescription}
                            onChange={handleChange}
                            size='small' margin='normal' type={"password"} placeholder='Job Description'
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
                            size='small' margin='normal' type={"text"} placeholder='Company Website' />

                        <TextField
                            id="date"
                            label="Last Date"
                            type="date"
                            name="lastDate"
                            value={inputs.lastDate}
                            onChange= {handleChange}
                            defaultValue="2017-05-24"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
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
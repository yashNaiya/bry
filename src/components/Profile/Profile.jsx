import React from 'react'
import { Box, Typography, TextField, Button, IconButton, FormControl, Radio, FormControlLabel, FormLabel, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { PhotoCamera } from '@mui/icons-material';
import image from '../../assets/profile.svg'


import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))

    const [readMode, setMode] = useState(true)

    const [ImagePath, setImagePath] = useState('')


    const handleChange = (e) => {

        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post("/UpdateProfile",user).then(res => alert(res.data.message))
        const formdata = new FormData()
        formdata.append("photo", file)
        formdata.append("ID", user._id)
        axios.post("/UploadPhoto", formdata).then(res => alert(res.data.message))
        // setImagePath(`http://localhost:9002/images/${user.Image}`)

    }
    const handleRead = function (e) {
        setMode(true)
    }

    const handleEdit = function () {
        setMode(false)
    }

    const [file, setFile] = useState();
    function handleImage(e) {
        // console.log(e.target.files);
        // setFile({...file,url:URL.createObjectURL(e.target.files[0])});
        setFile(e.target.files[0])


    }
    return (
        <Box flex={6}
            display='flex'
            flexDirection={'row'}
            alignItems='flex-start'
            sx={{
                padding: { xs: 'none', sm: '10px' }
            }}>
            <form onSubmit={handleSubmit}>
                <Box width={200} display={'flex'} justifyContent={'space-evenly'}>
                    <Button variant='outlined' onClick={handleRead} >Read</Button>
                    <Button variant='outlined' onClick={handleEdit} >Edit</Button>
                </Box>
                <Box display="flex" flexDirection={'column'} sx={{ alignItems: "center", margin: 'auto' }}>
                    <Typography variant='h4' color={'primary'} fontWeight={100} padding={4}>Manage Profile</Typography>
                    <Box>
                        <Box>
                            <img alt={'profile'} width={'150'} height={'150'} />
                        </Box>
                        {readMode ? <></> :
                            <>
                                <Button variant="contained" component="label">
                                    Upload
                                    <input hidden name='photo' onChange={handleImage} type="file" />
                                </Button>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden name='photo' onChange={handleImage} type="file" />
                                    <PhotoCamera />
                                </IconButton>
                            </>
                        }
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection={'column'}
                    alignItems="flex-start"
                    justifyContent={"space-evenly"}>
                    <Box minWidth={300} display='flex' flexDirection={'column'} p={2} alignItems={'center'}>
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Name"
                            autoComplete='off'
                            name='name'
                            defaultValue={user.name}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Number"
                            autoComplete='off'
                            name='number'
                            value={user.number}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }}
                            size='small' margin='normal' type={"number"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="ID"
                            value={user.ID}
                            autoComplete='off'
                            name='ID'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Email"
                            autoComplete='off'
                            name='email'
                            value={user.email}
                            size='small' margin='normal' type={"email"}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Address"
                            autoComplete='off'
                            name='Address'
                            value={user.Address}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}/>
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Year of Joining"
                            value={user.Batch}
                            autoComplete='off'
                            name='yearOfJoining'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }}
                            size='small' margin='normal' type={"number"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Passout Year"
                            autoComplete='off'
                            value={user.Passyear}
                            name='Passyear'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }}
                            size='small' margin='normal' type={"number"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Job role"
                            autoComplete='off'
                            name='Job_role'
                            value={user.Job_role}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }}
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Company"
                            autoComplete='off'
                            name='company'
                            value={user.company}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }}
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Designation"
                            autoComplete='off'
                            name='Designation'
                            value={user.Designation}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }}
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Work Industry"
                            autoComplete='off'
                            name='Work_Ind'
                            value={user.Work_Ind}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                        '-webkit-appearance': 'none',
                                    },
                                }
                            }}
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Branch"
                            autoComplete='off'
                            name='Branch'
                            value={user.Branch}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            autoComplete='off'
                            name='password'
                            value={user.password}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"password"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Field Of Interest"
                            autoComplete='off'
                            name='Interest'
                            value={user.Interest}
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            onChange={handleChange}
                            variant='filled'
                            label="Birth Date"
                            autoComplete='off'
                            value={user.DOB}
                            name='DOB'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"date"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Box display={'flex'} flexDirection={'column'} >

                            <Typography variant={'h6'} color={'primary'} m={4} >Connect with college</Typography>
                            <FormControl
                                margin='normal'
                            >
                                <FormLabel id="demo-radio-buttons-group-label">Take WorkShop</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="yes"
                                    onChange={handleChange}
                                    name="Workshop"
                                    row
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl
                                margin='normal'
                            >
                                <FormLabel id="demo-radio-buttons-group-label">Take a Lecture</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="yes"
                                    onChange={handleChange}
                                    name="Lecture"
                                    row
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" flexDirection={'column'} sx={{ alignItems: "center", margin: '10px' }}>
                    <Button type="submit" variant='contained' sx={{ marginTop: 3 }}>Update</Button>
                </Box>

            </form>
            <>
                <img src={image} height={'35%'} width='auto' />
            </>
        </Box>
    )
}

export default Profile

import React from 'react'
import { Box, Typography, TextField, Button, IconButton } from '@mui/material'
import { useState } from 'react'
import { PhotoCamera } from '@mui/icons-material';
import image from '../../assets/profile.svg'

const Profile = () => {
    let user = sessionStorage.getItem('sessionData')
    user = JSON.parse(user)
    
    const [readMode, setMode] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const handleRead = function (e) {
        setMode(true)
    }

    const handleEdit = function () {
        setMode(false)
    }

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
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
                            <img src={file} width={'150'} height={'150'} />
                        </Box>
                        {readMode ? <></> :
                            <>
                                <Button variant="contained" component="label">
                                    Upload
                                    <input hidden name='profilePic' onChange={handleChange} multiple type="file" />
                                </Button>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden name='profilePic' onChange={handleChange} type="file" />
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
                            variant='filled'
                            label="Address"
                            autoComplete='off'
                            name='Address'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            label="Current Location"
                            autoComplete='off'
                            name='location'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                         <TextField
                            fullWidth
                            variant='filled'
                            label="Year of Joining"
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
                            variant='filled'
                            label="Passout Year"
                            autoComplete='off'
                            name='PassoutYear'
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
                            variant='filled'
                            label="Job Role"
                            autoComplete='off'
                            name='jobRole'
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
                            variant='filled'
                            label="Company"
                            autoComplete='off'
                            name='company'
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
                            variant='filled'
                            label="Designation"
                            autoComplete='off'
                            name='designation'
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
                            variant='filled'
                            label="Work Industry"
                            autoComplete='off'
                            name='workIndustry'
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
                            variant='filled'
                            label="Branch"
                            autoComplete='off'
                            name='branch'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            variant='filled'
                            autoComplete='off'
                            name='password'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"password"}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            label="Field Of Interest"
                            autoComplete='off'
                            name='foi'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            label="Birth Date"
                            autoComplete='off'
                            name='BDate'
                            inputProps={
                                { readOnly: readMode ? true : false }
                            }
                            size='small' margin='normal' type={"text"}
                        />
                    </Box>

                </Box>
                <Box display="flex" flexDirection={'column'} sx={{ alignItems: "center", margin: '10px' }}>
                    <Button type="submit" variant='contained' sx={{ marginTop: 3 }}>Update</Button>
                </Box>

            </form>
            <>
                <img src={image} height={'40%'} width='auto' />
            </>
        </Box>
    )
}

export default Profile

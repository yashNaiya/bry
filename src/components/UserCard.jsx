import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react'
import image from '../assets/profile.svg'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const UserCard = (props) => {

    const user = JSON.parse(props.user)
    // console.log(user)

    const handleClick = () =>{
        props.setCard(false)
    }
    return (
        <Box maxWidth={500}
            m={'auto'}
            p={5}
        >
            <Box display={'flex'} flexDirection={'row'} justifyContent={'right'}>
                <Button onClick={handleClick}>
                <CloseRoundedIcon 
                    sx={{
                        cursor: 'pointer',
                    }} />
                </Button>
            </Box>
            <Box
                maxWidth={500}
                m={'auto'}
                marginBottom={'3rem'}
                p={5}
                display='flex'
                flexDirection={'column'}
                alignItems='center'
                sx={{
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                    padding: { xs: 'none', sm: '10px' }
                }}>
                <img src={image} alt={'profile'} width={'150'} height={'150'} />
                <Box minWidth={300} display='flex' flexDirection={'column'} p={2} alignItems={'center'}>
                    <TextField
                        fullWidth
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Name"
                        autoComplete='off'
                        name='name'
                        defaultValue={user.name}
                        size='small' margin='normal' type={"text"}
                    />
                    <TextField
                        fullWidth
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="ID"
                        value={user.ID}
                        autoComplete='off'
                        name='ID'
                        size='small' margin='normal' type={"text"}
                    />
                    <TextField
                        fullWidth
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Email"
                        autoComplete='off'
                        name='email'
                        value={user.email}
                        size='small' margin='normal' type={"email"}
                    />
                    <TextField
                        fullWidth
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Current Location"
                        autoComplete='off'
                        value={user.Curr_loc}
                        name='Curr_loc'
                        size='small' margin='normal' type={"text"}
                    />
                    <TextField
                        fullWidth
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Year of Joining"
                        value={user.Batch}
                        autoComplete='off'
                        name='yearOfJoining'
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
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Passout Year"
                        autoComplete='off'
                        value={user.Passyear}
                        name='Passyear'
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
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Job role"
                        autoComplete='off'
                        name='Job_role'
                        value={user.Job_role}
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
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Company"
                        autoComplete='off'
                        name='company'
                        value={user.company}
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
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Designation"
                        autoComplete='off'
                        name='Designation'
                        value={user.Designation}
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
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Work Industry"
                        autoComplete='off'
                        name='Work_Ind'
                        value={user.Work_Ind}
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
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Branch"
                        autoComplete='off'
                        name='Branch'
                        value={user.Branch}
                        size='small' margin='normal' type={"text"}
                    />
                    <TextField
                        fullWidth
                        inputProps={{ readOnly: true }}
                        variant='filled'
                        label="Field Of Interest"
                        autoComplete='off'
                        name='Interest'
                        value={user.Interest}
                        size='small' margin='normal' type={"text"}
                    />
                    <Button>Message</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default UserCard

import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import image from '../assets/profile.svg'


const ViewProfile = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(localStorage.getItem("viewedProfile"))
    }, [])

    return (
        <Box maxWidth={500}
        m={'auto'}
        p={5}>
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
                    defaultValue="Name"
                    size='small' margin='normal' type={"text"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="ID"
                    value="Id"
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
                    value="Email"
                    size='small' margin='normal' type={"email"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Current Location"
                    autoComplete='off'
                    value="current location"
                    name='Curr_loc'
                    size='small' margin='normal' type={"text"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Year of Joining"
                    value="2019"
                    autoComplete='off'
                    name='yearOfJoining'
                    size='small' margin='normal' type={"number"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Passout Year"
                    autoComplete='off'
                    value="2023"
                    name='Passyear'
                    size='small' margin='normal' type={"number"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Job role"
                    autoComplete='off'
                    name='Job_role'
                    value="Job role"
                    size='small' margin='normal' type={"text"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Company"
                    autoComplete='off'
                    name='company'
                    value="company"
                    size='small' margin='normal' type={"text"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Designation"
                    autoComplete='off'
                    name='Designation'
                    value="designation"
                    size='small' margin='normal' type={"text"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Work Industry"
                    autoComplete='off'
                    name='Work_Ind'
                    value="Work industry"
                    size='small' margin='normal' type={"text"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Branch"
                    autoComplete='off'
                    name='Branch'
                    value="Branch"
                    size='small' margin='normal' type={"text"}
                />
                <TextField
                    fullWidth
                    inputProps={{ readOnly: true }}
                    variant='filled'
                    label="Field Of Interest"
                    autoComplete='off'
                    name='Interest'
                    value="Intrest"
                    size='small' margin='normal' type={"text"}
                />
                <Button>Message</Button>
            </Box>
        </Box>
    </Box>
    )
}

// localStorage.removeItem('Name');

export default ViewProfile
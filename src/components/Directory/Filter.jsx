import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, makeStyles, TextField } from '@mui/material'
import React, { useState } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
const Filter = (props) => {


    const handleChange = (e) => {

        props.setFilter((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }))
    }
    const [open1, setOpen1] = React.useState(false);
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const [open2, setOpen2] = React.useState(false);
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const [open3, setOpen3] = React.useState(false);
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const [open4, setOpen4] = React.useState(false);
    const handleClick4 = () => {
        setOpen4(!open4);
    };
    const [open5, setOpen5] = React.useState(false);
    const handleClick5 = () => {
        setOpen5(!open5);
    };

    return (
        <Box flex={2} minHeight={'80vh'} display={'flex'} flexDirection={'column'} paddingRight="5px">
            {/* <TextField fullWidth size='small' sx={{paddingTop:"10px"}} name='find' value={find} onChange={handleChange} variant='standard' label='Search' /> */}
            <List>
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px",backgroundColor:"#BAB2B5"}} onClick={handleClick1}>
                    <ListItemText primary="Search By Role" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List>
                        <TextField name='role' value={props.filter.role} onChange={handleChange}
                        size='small' variant='outlined' type={'text'} label={'Enter Role'}></TextField>
                    </List>
                </Collapse>
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px",backgroundColor:"#BAB2B5"}} onClick={handleClick2}>
                    <ListItemText primary="Year of Joining" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List>
                        <TextField name='joining' value={props.filter.joining} onChange={handleChange}
                        sx={{'& input[type=number]': {
                            '-moz-appearance': 'textfield'
                        },
                        '& input[type=number]::-webkit-outer-spin-button': {
                            '-webkit-appearance': 'none',
                            margin: 0
                        },
                        '& input[type=number]::-webkit-inner-spin-button': {
                            '-webkit-appearance': 'none',
                            margin: 0
                        }}}
                        size='small' variant='outlined' type={'number'} label={'Enter Year'}></TextField>
                    </List>
                </Collapse>
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px", backgroundColor:"#BAB2B5"}} onClick={handleClick3}>
                    <ListItemText primary="Year of Graduation" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List>
                        <TextField name='graduating' value={props.filter.graduating} onChange={handleChange}
                        sx={{'& input[type=number]': {
                            '-moz-appearance': 'textfield'
                        },
                        '& input[type=number]::-webkit-outer-spin-button': {
                            '-webkit-appearance': 'none',
                            margin: 0
                        },
                        '& input[type=number]::-webkit-inner-spin-button': {
                            '-webkit-appearance': 'none',
                            margin: 0
                        }}}
                        size='small' variant='outlined' type={'number'} label={'Enter Year'}></TextField>
                    </List>
                </Collapse>
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px", backgroundColor:"#BAB2B5"}} onClick={handleClick4}>
                    <ListItemText primary="Department" />
                    {open4 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open4} timeout="auto" unmountOnExit>
                    <List>
                        <TextField name='dept' value={props.filter.dept} onChange={handleChange}
                        size='small' variant='outlined' type={'text'} label={'Enter Department'}></TextField>
                    </List>
                </Collapse>
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px", backgroundColor:"#BAB2B5"}} onClick={handleClick5}>
                    <ListItemText primary="Current Location" />
                    {open5 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open5} timeout="auto" unmountOnExit>
                    <List>
                        <TextField name='cur_loc' value={props.filter.cur_loc} onChange={handleChange}
                        size='small' variant='outlined' type={'text'} label={'Enter Location'}></TextField>
                    </List>
                </Collapse>
            </List>
            
        </Box>
    )
}

export default Filter
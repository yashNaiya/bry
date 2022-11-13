import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, makeStyles, TextField } from '@mui/material'
import React from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
const Filter = () => {
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
            <List>
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px",backgroundColor:"#D3D3D3"}} onClick={handleClick1}>
                    <ListItemText primary="Search By Role" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List>
                        <TextField 
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
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px",backgroundColor:"#D3D3D3"}} onClick={handleClick2}>
                    <ListItemText primary="Year of Joining" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List>
                        <TextField 
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
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px", backgroundColor:"#D3D3D3"}} onClick={handleClick3}>
                    <ListItemText primary="Year of Graduation" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List>
                        <TextField 
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
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px", backgroundColor:"#D3D3D3"}} onClick={handleClick4}>
                    <ListItemText primary="Department" />
                    {open4 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open4} timeout="auto" unmountOnExit>
                    <List>
                        <TextField 
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
                <ListItemButton sx={{padding:"15px",marginY:"10px",borderRadius:"10px", backgroundColor:"#D3D3D3"}} onClick={handleClick5}>
                    <ListItemText primary="Current Location" />
                    {open5 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open5} timeout="auto" unmountOnExit>
                    <List>
                        <TextField 
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
            </List>
            
        </Box>
    )
}

export default Filter
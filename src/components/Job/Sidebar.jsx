import React from 'react'
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SendIcon from "@mui/icons-material/Send"
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <Box bgcolor={'primary.light'} maxHeight={'100%'} minHeight={"100vh"}  flex={1.5} sx={{ display: { xs: "none", sm: "flex" } }}>
      <Box position="fixed">
        <ListItemButton sx={{minWidth:'100%'}} NavLink to={'/jobpage'}>
          <ListItemIcon>
            <WorkIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon >
            <ChatBubbleIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupsIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton NavLink to={'/profilepage'}>
          <ListItemIcon>
            <AccountCircleIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </Box>
    </Box>
  )
}

export default Sidebar


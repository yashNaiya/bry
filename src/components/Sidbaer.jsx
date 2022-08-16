import React from 'react'
import { Box, ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import SendIcon from "@mui/icons-material/Send"
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';


const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
      <ListItemButton>
        <ListItemIcon>
          <WorkIcon color='primary'/>
        </ListItemIcon>
        <ListItemText primary="Jobs"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon >
          <ChatBubbleIcon color='primary'/>
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GroupsIcon color='primary'/>
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon color='primary'/>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon color='primary'/>
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton> 
      </Box>
    </Box>
  )
}

export default Sidebar


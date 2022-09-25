import React from 'react'
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SendIcon from "@mui/icons-material/Send"
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';


const Sidebar = () => {
  const viewer = sessionStorage.getItem('viewer')

  if(viewer === '2'){

    return (
      <Box maxHeight={'100%'} minHeight={"100vh"} flex={1.5}
        sx={{
          display: { xs: "none", sm: "flex" },
          borderRight: '2px solid #A7BEAE',
          // boxShadow:'1px 3px 1px 2px #A7BEAE'
        }}>
        <Box position="fixed">
       
          <ListItemButton bgcolor={'primary.light'}  to={'/jobpage'}>
            <ListItemIcon>
              <WorkIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Jobs" />
          </ListItemButton>
          <ListItemButton to={'/reports'}>
            <ListItemIcon>
              <SendIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon >
              <ChatBubbleIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
          <ListItemButton to={'/friends'}>
            <ListItemIcon>
              <GroupsIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton  to={'/profilepage'}>
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
  else if(viewer === '1'){
    return(
      <Box maxHeight={'100%'} minHeight={"100vh"} flex={1.5}
        sx={{
          display: { xs: "none", sm: "flex" },
          borderRight: '2px solid #A7BEAE',
          // boxShadow:'1px 3px 1px 2px #A7BEAE'
        }}>
        <Box position="fixed">
       
          <ListItemButton bgcolor={'primary.light'}  to={'/addjob'}>
            <ListItemIcon>
              <WorkIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Add Job" />
          </ListItemButton>
          <ListItemButton to={'/reports'}>
            <ListItemIcon>
              <SendIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon >
              <ChatBubbleIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
          <ListItemButton to={'/friends'}>
            <ListItemIcon>
              <GroupsIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton  to={'/profilepage'}>
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
}

export default Sidebar


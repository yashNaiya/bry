import React from 'react'
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SendIcon from "@mui/icons-material/Send"
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import RadarIcon from '@mui/icons-material/Radar';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

const Sidebar = () => {
  const viewer = sessionStorage.getItem('viewer')

  if (viewer === '2') {

    return (
      <Box maxHeight={'100%'} minHeight={"100vh"} flex={1.5}
        sx={{
          display: { xs: "none", sm: "flex" },
          borderRight: '2px solid #A7BEAE',
          // boxShadow:'1px 3px 1px 2px #A7BEAE'
        }}>
        <Box position="fixed">

          <ListItemButton to={'/jobpage'}>
            <ListItemIcon>
              <RadarIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Jobs" />
          </ListItemButton>
          <ListItemButton to={'/myapplications'}>
            <ListItemIcon>
              <WorkHistoryIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="My Applications" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon >
              <ChatBubbleIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
          <ListItemButton to={'/connect'}>
            <ListItemIcon>
              <GroupsIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Connect" />
          </ListItemButton>
          <ListItemButton to={'/profilepage'}>
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
  else if (viewer === '1') {
    return (
      <Box maxHeight={'100%'} minHeight={"100vh"} flex={1.5}
        sx={{
          display: { xs: "none", sm: "flex" },
          borderRight: '2px solid #A7BEAE',
          
        }}>
        <Box position="fixed">
          <ListItemButton>
            <ListItemIcon>
              <WorkIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="My Jobs" />
          </ListItemButton>
          <ListItemButton to={'/addjob'}>
            <ListItemIcon>
              <AddBoxRoundedIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Add Job" />
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
          <ListItemButton to={'/profilepage'}>
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
  else if (viewer === '0') {
    return (
      <Box maxHeight={'100%'} minHeight={"100vh"} flex={1.5}
        sx={{
          display: { xs: "none", sm: "flex" },
          borderRight: '2px solid #A7BEAE',
          // boxShadow:'1px 3px 1px 2px #A7BEAE'
        }}>
        <Box position="fixed">
          <ListItemButton to={'/reports'}>
            <ListItemIcon>
              <ArticleIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton to={'/Authentication'}>
            <ListItemIcon>
              <HowToRegIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Authenticate" />
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
          <ListItemButton to={'/profilepage'}>
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


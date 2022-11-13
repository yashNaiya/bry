import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../Job/seeker/Navbar'
import Sidebar from '../Sidebar'
import Chat from './Chat'
import ChatRightbar from './ChatRightbar'
import Message from './Message'

const ChatMain = () => {
  return (
    <Box >
        <Navbar />
        <Box marginX={1} marginTop={0} paddingX="5%" sx={{paddingX:{sm:"0"}}}>
          <Stack direction="row" spacing={4} justifyContent="space-between">
            <Sidebar />
            <Chat/>
            <ChatRightbar/>
          </Stack>
        </Box>
      </Box>
  )
}

export default ChatMain

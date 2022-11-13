import { Box, Button, styled, TextField } from '@mui/material'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Message from './Message'
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react'

const Chat = () => {

  const ChatboxBottom = styled("div")(({ theme }) => ({
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }))

  return (
    <Box display='flex' flexDirection='column' flex={4} padding={2} borderRadius={5} maxHeight={'75vh'} minHeight={'75vh'} sx={{ boxShadow: "inset rgba(0, 0, 0, 0.35) 0px 0px 12px 0px" }} >
      <Box overflow={'scroll'}>
        {/* {
        GetUserchat.map((m)=>
              <Message own={false} msg={m.text} time={m.createdAt}/>)
        } */}
        
      </Box>
      <ChatboxBottom>
        <TextField sx={{ width: '80%' }} size='small' placeholder='write something'></TextField>
        <Button><SendIcon /></Button>
      </ChatboxBottom>
    </Box>
  )
}

export default Chat
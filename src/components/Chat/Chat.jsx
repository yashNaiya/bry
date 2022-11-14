import { Box, Button, styled, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import Message from './Message'
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {


  const ChatboxBottom = styled("div")(({ theme }) => ({
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }))

  const [message, setMessage] = useState("")

  const handleChange = (e)=>{
    console.log(e)
    setMessage(e.target.value)
  }

  return (
    <Box display='flex' flexDirection='column' flex={4} padding={2} borderRadius={5} maxHeight={'75vh'} minHeight={'75vh'} sx={{ boxShadow: "inset rgba(0, 0, 0, 0.35) 0px 0px 12px 0px" }} >
      <Box overflow={'scroll'}>
        <Message own={false} />
        <Message own={true} />
        <Message own={false} />
        <Message own={false} />
        <Message own={true} />
        <Message own={false} />
      </Box>
      <ChatboxBottom>
        <TextField fullWidth size='small' type='text' key={"messageText"} name='textfield' sx={{ paddingTop: "10px" }} variant='standard' value={message} label='Search' onChange={handleChange} />
        <Button><SendIcon /></Button>
      </ChatboxBottom>
    </Box>
  )
}

export default Chat
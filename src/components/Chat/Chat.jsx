import { Box, Button, styled, TextField } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Message from './Message'
import SendIcon from '@mui/icons-material/Send';

const Chat = (props) => {

  // props.chatIds

  const ChatboxBottom = styled("div")(({ theme }) => ({
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

  }))


  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))

  const [GetUserchat, SetGetUserChat] = useState([])
  const [newMessage, setNewMessage] = useState()

  const getChats = () => {
    if (props.chatIds.convId) {
      axios.get(`/GetChatOfOneuser/${props.chatIds.convId}`)
        .then(res => SetGetUserChat(res.data))
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    getChats()

  }, [props])


  const handlesubmit = async (e) => {
    e.preventDefault();
    setNewMessage('')
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: props.chatIds.convId
    };


    try {
      const res = axios.post("/Newmessage", message);

    } catch (err) {
      console.log(err);
    }


  }

  return (
    <Box justifyContent={'space-between'} display='flex' flexDirection='column' flex={4} padding={2} borderRadius={5} maxHeight={'75vh'} minHeight={'75vh'} sx={{ boxShadow: "inset rgba(0, 0, 0, 0.35) 0px 0px 12px 0px" }} >
      <Box overflow={'scroll'} minHeight={'80%'}>
        {
          GetUserchat.map((m) => {
            console.log(m)
            if (m.sender === user._id) {
              return <Message own={true} msg={m.text} time={m.createdAt} />
            }
            else {
              return <Message own={false} msg={m.text} time={m.createdAt} />
            }

          })
        }

      </Box>
      <ChatboxBottom>
        <TextField autoFocus='autoFocus' key='message' sx={{ width: '80%' }} size='small' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} label='write something'></TextField>
        <Button onClick={handlesubmit}><SendIcon /></Button>
      </ChatboxBottom>
    </Box>
  )
}

export default Chat
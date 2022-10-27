import { Box } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

const Chat = () => {
  const [chats, setchats] = useState([])
  const fetchChats = async () => {
    const {data} = await axios.get('/api/chat')
    setchats(data)
  }

  useEffect(()=>{
    fetchChats()
  },[])
  return (
    <Box flex={6}>
      {chats.map(chat=><div key={chat._id}>{chat.chatName}</div>)}
    </Box>
  )
}

export default Chat
import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Job/seeker/Navbar'
import Sidebar from '../Sidebar'
import Chat from './Chat'
import ChatRightbar from './ChatRightbar'
import axios from 'axios'

const ChatMain = () => {
  // conversation,setFriends,friend,setChatIds
  const [chatIds,setChatIds] = useState({friendId:'',convId:''})
  const [friend, setFriends] = useState([])
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))
  const [conversation, setConversation] = useState([])

  const getCoversations = async () => {
    try {
      const res = await axios.get("/GetAllCoversation/" + user._id);
      setConversation(res.data)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getCoversations()

  }, [user._id]);
  const frnd = []
 

  return (
    <Box >
      <Navbar />
      <Box marginX={1} marginTop={0} paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Sidebar />
          <Chat chatIds={chatIds}/>
          <ChatRightbar chatIds={chatIds} conversation={conversation} setFriends={setFriends} friend={friend} setChatIds={setChatIds} />
        </Stack>
      </Box>
    </Box>
  )
}

export default ChatMain

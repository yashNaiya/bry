import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Job/seeker/Navbar'
import Sidebar from '../Sidebar'
import Chat from './Chat'
import ChatRightbar from './ChatRightbar'
import axios from 'axios'

const ChatMain = () => {

  const conv = []
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))
  const [conversation, setConversation] = useState([])
  const friendId = ''
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

  const ChatPage = (fId) => {
    friendId = fId
    console.log(fId)
    for (var i = 0; i < conversation.length; i++) {
      if (conversation[i].members[0] === fId || conversation[i].members[1] === fId) {
        conv[0] = conversation[i]._id
      }
    }
    console.log(conv)

  }
  return (
    <Box >
      <Navbar />
      <Box marginX={1} marginTop={0} paddingX="5%" sx={{ paddingX: { sm: "0" } }}>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Sidebar />
          <Chat conv={conv} fId={friendId} />
          <ChatRightbar getCoversations={getCoversations} ChatPage={ChatPage} conversation={conversation} setConversation={setConversation} />
        </Stack>
      </Box>
    </Box>
  )
}

export default ChatMain

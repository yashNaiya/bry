import { Box, Button, styled, TextField } from '@mui/material'
import React, { useState,useEffect } from 'react'
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

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))

  const [GetUserchat,SetGetUserChat] = useState([])
  const [newMessage,setNewMessage] = useState("")
  const [chat,setChat] = useState(sessionStorage.getItem('chat'))


  // console.log(sessionStorage.getItem('chat'))

  useEffect(() => {
    axios.get('/GetChatOfOneuser/6371dbdba0328674eded3d22')
        .then(res => SetGetUserChat(res.data))
        .catch(err => console.log(err))
}, []);
 
    // console.log(GetUserchat[0])

    // GetUserchat.map((m)=>console.log(m.text))

    const handlesubmit = async (e) => {
      e.preventDefault();
      // console.log(newMessage)
      // console.log(user._id)
      const message = {
         sender: user._id,
         text:newMessage,
         conversationId:"6371dbdba0328674eded3d22"
      };


      try{
        const res = axios.post("/Newmessage",message);
        // SetGetUserChat([...GetUserchat,res.data])

      }catch(err){
         console.log(err);
      }
      
  
    }

  return (
    <Box display='flex' flexDirection='column' flex={4} padding={2} borderRadius={5} maxHeight={'75vh'} minHeight={'75vh'} sx={{ boxShadow: "inset rgba(0, 0, 0, 0.35) 0px 0px 12px 0px" }} >
      <Box overflow={'scroll'}>
        {
      GetUserchat.map((m)=>{
          console.log(m)
          if(m.sender === user._id){
            return  <Message own={true} msg={m.text} time={m.createdAt}/>
          }
          else{
            return <Message own={false} msg={m.text} time={m.createdAt}/>
          }
              
        })
      }
        
      </Box>
      <ChatboxBottom>
        <TextField sx={{ width: '80%' }} size='small' value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} placeholder='write something'></TextField>
        <Button onClick={handlesubmit}><SendIcon /></Button>
      </ChatboxBottom>
    </Box>
  )
}

export default Chat
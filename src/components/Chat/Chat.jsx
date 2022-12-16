import { Box, Button, styled, TextField } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Message from './Message'
import SendIcon from '@mui/icons-material/Send';
import { WebSocket } from 'ws';
import { io } from "socket.io-client";
const Endpoint = "http://localhost:9002"
var socket;

const Chat = (props) => {
  // console.log(props)
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))
  const [arrivalMessage,setArrivalMessage] = useState(null)

  const [GetUserchat, SetGetUserChat] = useState([])
  const [newMessage, setNewMessage] = useState()

  socket = io(Endpoint)

  socket.on("connect", () => {
    // console.log(socket.id); 
  });

  socket.emit("addUser",user._id)

  useEffect(()=>{
    socket.on("getMessage",data=>{
      setArrivalMessage({
        sender : data.senderId,
        text : data.text,
        createdAt : Date.now()
      })
    })


  })

 
  
  // if(arrivalMessage){

  //   SetGetUserChat(arrivalMessage)
  // }
  console.log(arrivalMessage)

  // console.log(props.chatIds)

  const ChatboxBottom = styled("div")(({ theme }) => ({
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

  }))





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

    socket.emit("sendMessage",{
      senderId : user._id,
      receiverId : props.chatIds.friendId,
      text: newMessage,
    });


    try {
      const res = axios.post("/Newmessage", message);


    } catch (err) {
      console.log(err);
    }


  }

  return (
    <Box justifyContent={'space-between'} display='flex' flexDirection='column' flex={4} padding={2}  maxHeight={'75vh'} minHeight={'75vh'} sx={{ boxShadow: "inset rgba(0, 0, 0, 0.35) 0px 0px 12px 0px" }} >
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
import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ChatRightbar = () => {

    const [chats, setchats] = useState([])
    const [search, setSearch] = useState([])
    const [find, setfind] = useState('')
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))
    const [tempChat, setTempChat] = useState({
        userId:"",
        user:""
    })

    const fetchChats = async () => {
        const { data } = await axios.get('/api/chat')
        setchats(data)
    }
    const handleChange = async (e) => {
        setfind(e.target.value)
        if ((e.target.value) === '') {
            setSearch([])
        }
        else {
            const { data } = await axios.get('/register')
            setSearch(data)
        }
    }
    // function searchClick(userId){
    //     // axios.post("/api/chat", ).then(res => alert(res.data.message))
    //     console.log(userId)
    // }
    const search1 = search.filter(src => {
        return src.name.includes(find) || src.email.includes(find)
    })

    useEffect(() => {
        fetchChats()
    }, [])
    return (
        // <Box flex={6}>
        //   {chats.map(chat=><div key={chat._id}>{chat.chatName}</div>)}
        // </Box>
        <Box flex={2} paddingX={3} maxHeight={'100%'} minHeight={'70vh'} sx={{ borderLeft: '2px solid #A7BEAE' }}>
            <TextField fullWidth size='small' name='find' value={find} placeholder='find' onChange={handleChange} />
            {search1.map(src => <div key={src._id}><Box p={3} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "primary.light", cursor: "pointer" }}>
                <Button onClick={() => 
                    { 
                        setTempChat(()=>({
                            user:user,
                            userId:src._id
                        }))
                    }

                } 
                    sx={{color:"black"}}>
                    {src.name}
                </Button>
            </Box></div>)}
            {/* <Box p={3} marginTop={2}  sx={{boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px", cursor: "pointer" }}>demo</Box>
            <Box p={3} marginTop={2}  sx={{boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px", cursor: "pointer" }}>demo</Box>
            <Box p={3} marginTop={2}  sx={{boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px", cursor: "pointer" }}>demo</Box>
            <Box p={3} marginTop={2}  sx={{boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px", cursor: "pointer" }}>demo</Box>
            <Box p={3} marginTop={2}  sx={{boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px", cursor: "pointer" }}>demo</Box>
            <Box p={3} marginTop={2}  sx={{boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px", cursor: "pointer" }}>demo</Box>
            <Box p={3} marginTop={2}  sx={{boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px", cursor: "pointer" }}>demo</Box> */}
        </Box>
    )

}

export default ChatRightbar
import { Box, Button, ListItemButton, ListItemText, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import image from '../../assets/pngegg.png'

const ChatRightbar = () => {

    const [chats, setchats] = useState([])
    const [search, setSearch] = useState([])
    const [find, setfind] = useState('')
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))
    const [tempChat, setTempChat] = useState({
        userId: "",
        user: ""
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
        <Box flex={2} padding={2} borderRadius={5} maxHeight={'75vh'} minHeight={'75vh'} sx={{ overflowY: "scroll", boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px" }}>
            <TextField fullWidth size='small' name='find' sx={{paddingTop:"10px"}} variant='standard' value={find} placeholder='Search' onChange={handleChange} />
            {search1.map(src => <div key={src._id}><Box p={3} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor: "pointer" }}>
                <Button onClick={async () => {
                    setTempChat(() => ({
                        user: user._id,
                        userId: src._id
                    }))
                    axios.post("/api/chat", tempChat).then(res => alert(res.data.message))
                }

                }
                    sx={{ color: "black" }}>
                    {src.name}
                </Button>
            </Box></div>)}
            <Box paddingY={4}>
                <ListItemButton sx={{marginY:'10px'}}>
                    <img width={"32px"} height={"32px"} borderRadius={"50%"} objectFit={"cover"} src={image} alt='' />
                    <ListItemText sx={{marginX:"10px"}} primary="Chat" />
                </ListItemButton>
                <ListItemButton  sx={{marginY:'10px'}}>
                    <img width={"32px"} height={"32px"} borderRadius={"50%"} objectFit={"cover"} src={image} alt='' />
                    <ListItemText sx={{marginX:"10px"}} primary="Chat" />
                </ListItemButton>
                <ListItemButton sx={{marginY:'10px'}}>
                    <img width={"32px"} height={"32px"} borderRadius={"50%"} objectFit={"cover"} src={image} alt='' />
                    <ListItemText sx={{marginX:"10px"}} primary="Chat" />
                </ListItemButton>
                <ListItemButton sx={{marginY:'10px'}}>
                    <img width={"32px"} height={"32px"} borderRadius={"50%"} objectFit={"cover"} src={image} alt='' />
                    <ListItemText sx={{marginX:"10px"}} primary="Chat" />
                </ListItemButton>
                
            </Box>
        </Box>
    )

}

export default ChatRightbar
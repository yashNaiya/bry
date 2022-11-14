import { Box, Button, ListItemButton, ListItemText, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import image from '../../assets/pngegg.png'
import Chat from './Chat'

const ChatRightbar = (props) => {

    const [chats, setchats] = useState([])
    const [search, setSearch] = useState([])
    const [find, setfind] = useState('')
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))

    const frnd = []

    for (var i = 0; i < props.conversation.length; i++) {
        if (props.conversation[i].members[0] !== user._id) {
            frnd[i] = (props.conversation[i].members[0])
        }

        if (props.conversation[i].members[1] !== user._id) {
            frnd[i] = (props.conversation[i].members[1])
        }
    }

    const getUserData = async () => {
        try {
            const ans = await axios.post("/User", frnd);
            props.setFriends(ans.data)

        } catch (err) {
            console.log(err)
        }

    };

    const ChatPage = async (fId) => {
        const conv = []
        for (var i = 0; i < props.conversation.length; i++) {
            if (props.conversation[i].members[0] === fId || props.conversation[i].members[1] === fId) {
                conv[0] = props.conversation[i]._id
            }
            props.setChatIds({
                friendId:fId,
                convId:conv[0]
             })
             console.log(props.chatIds)
        }
    }



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
            const { data } = await axios.get('/register/valid')
            setSearch(data)
        }
    }


    const search1 = search.filter(src => {
        return src.name.includes(find) || src.email.includes(find)
    })

    useEffect(() => {
        fetchChats()
    }, [])


    return (
        <Box flex={2} padding={2} borderRadius={5} maxHeight={'75vh'} minHeight={'75vh'} sx={{ overflowY: "scroll", boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px" }}>
            <TextField fullWidth size='small' name='find' sx={{ paddingTop: "10px" }} variant='standard' value={find} label='Search' onChange={handleChange} />
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
                {
                    props.friend.map((m) =>

                        <ListItemButton sx={{ marginY: '10px' }} onClick={e => ChatPage(m._id)}>
                            <img width={"32px"} height={"32px"} borderRadius={"50%"} objectFit={"cover"} src={image} alt='' />
                            <ListItemText sx={{ marginX: "10px" }} primary={m.name} />
                        </ListItemButton>
                    )


                }
            </Box>
            <Button onClick={getUserData} >See Old Conversations</Button>
        </Box>
    )


}



export default ChatRightbar
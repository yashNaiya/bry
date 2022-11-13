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
    const [friendIds,setFriendsIds]=useState([])
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))
    // const [conversation,setConversation] = useState([])

    // useEffect(()=>{
    //     const getCoversations = async () =>{
    //         try{
    //         const res = await axios.get("/GetAllCoversation/"+user._id);
    //         setConversation(res.data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }; 
    //     getCoversations()
    // },[user._id]);

    // console.log(conversation)
    const frnd = []
    
    for(var i=0;i<props.conversation.length;i++){
       if(props.conversation[i].members[0]!==user._id){
        frnd[i] = props.conversation[i].members[0]
         }

       if(props.conversation[i].members[1]!==user._id){
        frnd[i] = props.conversation[i].members[1] 
       } }
   

  
     const ans = []
  
        const getUserData = async () =>{
            try{
                const ans = await axios.post("/User",frnd);
                setFriendsIds(ans.data)
               
            }catch(err){
                console.log(err)
            } 
            // friendIds.map(m=>console.log(m[0].name))

    }; 

    const ChatPage=(fId)=>
      {
        console.log(fId)
        const conv = []
        for(var i=0;i<conversation.length;i++){
            if(conversation[i].members[0]===fId || conversation[i].members[1]===fId){
                conv[0] = conversation[i]._id
              }
       } 
       console.log(conv[0])
       
    // }

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
    
    

    {/* // const handleSubmit = (e) => {
    //     e.preventDefault();

    // } */}

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
                {
                    friendIds.map((m)=> 
                  <ListItemButton sx={{marginY:'10px'}} onClick={props.ChatPage(m[0]._id)}>
                    <img width={"32px"} height={"32px"} borderRadius={"50%"} objectFit={"cover"} src={image} alt='' />
                    <ListItemText sx={{marginX:"10px"}} primary={m[0].name } />
                </ListItemButton>
                    )
                }   
            </Box>
            <Button onClick={getUserData} >See Old Conversations</Button>
        </Box>
    )
            

}


export default ChatRightbar
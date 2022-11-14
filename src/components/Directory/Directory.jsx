import { Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Directory = () => {
    const [dataTable, setDataTable] = useState([]);
    //  console.log(dataTable)
    useEffect(() => {
        axios('/register/valid')
            .then(res => setDataTable(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleView = (email)=>{
        axios.get(`/register/${email}`)
        .then(function (response) {
          // console.log(response.data)
          localStorage.setItem("viewedProfile",JSON.stringify(response.data))
        })
        .catch(err => console.log(err));
        // console.log(dataofuser)
       
      //  console.log(localStorage.getItem("viewedProfile"))
       window.open('/viewProfile', '_blank', 'noopener,noreferrer');
    }
    const handleChat = ()=>{

    }
    return (
        <Box flex={4}
            display='flex'
            flexDirection={'row'}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
            sx={{
                padding: { xs: 'none', sm: '10px' }
            }}>
            {
                dataTable.map((data)=>{return <Card data={data} handleChat={handleChat} handleView={handleView}/>})
            }
        </Box>
    )
}

export default Directory

import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ViewProfile = () => {
    const [user, setUser] = useState()
    useEffect(() => {
      setUser(localStorage.getItem("viewedProfile"))
    }, [])
    
  return (
    <div>"<Button onClick={()=>{
        console.log(localStorage.getItem("viewedProfile"))
    }}>Click
        </Button>"</div>
  )
}

// localStorage.removeItem('Name');

export default ViewProfile
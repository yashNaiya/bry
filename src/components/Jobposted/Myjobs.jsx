import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Myjobs = (props) => {

  // const handleClick = ()=>{
  //   props.showPost(true)
  // }
  const handleView = (data) => {
    props.setJob(data)
    props.showPost(true)
  }

  const user = JSON.parse(sessionStorage.getItem('sessionData'))
  const [dataTable, setDataTable] = useState([]);
  //  console.log(user._id)

  useEffect(() => {
    axios.get(`/getpostedJob/${user._id}`)
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);
  //  console.log(dataTable)

  return (
    <Box
      flex={6}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-evenly'}
      flexWrap={'wrap'}>
      {dataTable.map((data) =>
        <Card
          key={data._id}
          sx={{
            margin: '3rem',
            minWidth: 345,
            maxHeight: 200,
            backgroundColor:"#d3d2d2",
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;",

          }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Company Name : {data.companyName}
            </Typography>
            <Typography variant="h5" component="div">
              Job Title : {data.title}
            </Typography>

            <Typography sx={{ mt: 1.5 }} variant="body2">
              LastDate : {data.lastDate}
              <br />
              Total Applications :  {data.Appliedusers.length}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleView(data)}>Learn More</Button>
          </CardActions>
        </Card>
      )}
    </Box>
  )
}

export default Myjobs
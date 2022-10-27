import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import PostPage from './PostPage';

const Post1 = (data) => {
    const navigate = useNavigate()
    // console.log(data.location)
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))

    const handleApply = (Job_id, user_id) => {
        console.log(user_id)
        console.log(data.user_id_In_Job)
        if (user_id === data.user_id_In_Job) {
            alert("You Can Not Apply Jobs You Posted")
            return
        }
        axios.post(`/ApplyForJob/${Job_id}/${user_id}`, user_id, Job_id)
            .then(response => {
                alert(response.data.message)
            })
            .catch(err => console.log(err))
    }

    const handleView = (data) => {
        console.log(data)
        data.showPost(true)

    }


    return (
        <Card sx={{ margin: "1%" }} >
            <CardHeader
                action={
                    <Typography variant='h5' color='primary.main' fontWeight={100} >
                        {data.salary + " LPA"}
                    </Typography>
                }
                title={data.title}
                subheader={data.WorkFromHome === 'true' ? 'Work From Home' : data.location}
            />
            <CardContent>
                <Typography variant='button'>
                    {data.type}
                </Typography>
                <Typography paddingY={'1rem'}>
                    {data.companyName}
                </Typography>
                <Typography paddingRight={'1rem'} display={'inline'}>
                    {data.recruterName}
                </Typography>
                <Typography display={'inline'}>
                    {data.recruterDesignation}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button onClick={()=>handleApply(data.Job_id,user._id)}>
                    Apply
                </Button>
                <IconButton onClick={()=>handleView(data)} >
                    <ReadMoreIcon />
                </IconButton>
            </CardActions>
        </Card>

    )
}

export default Post1

import { Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useState } from 'react';

const PostPage = (props) => {
    console.log(props.job)
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))
    const handleApply = (Job_id, user_id) => {
        // console.log(user_id)
        // console.log(props.job.user_id_In_Job)
        if (user_id === props.job.user_id_In_Job) {
            alert("You Can Not Apply Jobs You Posted")
            return
        }
        axios.post(`/ApplyForJob/${Job_id}/${user_id}`)
            .then(response => {
                alert(response.data.message)
            })
            .catch(err => console.log(err))
    }
    return (
        <Box>
            <Button onClick={() => {
                props.showPost(false)
            }}>
                <ArrowBackIcon />
            </Button>
            <Box display={'flex'} justifyContent={'center'} width={'100%'}>
                <Box width={'70%'} box-shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                    <form>
                        <Card sx={{ margin: "1%" }}>
                            <CardHeader
                                title={props.job.title}
                                subheader={ props.job.WorkFromHome +"/"+props.job.location}
                            />
                            <CardContent>
                                <Typography paddingY={'1rem'} color={'primary.main'} variant='h6'>
                                    Salary : {props.job.salary}
                                </Typography>
                                <Typography paddingY={'1rem'} variant='button'>
                                    Type : {props.job.type}
                                </Typography>
                                <Typography paddingY={'1rem'}>
                                    Company Name : {props.job.companyName}
                                </Typography>
                                <Typography paddingY={'1rem'}>
                                    Company Website : {props.job.website}
                                </Typography>
                                <Typography paddingY={'1rem'}>
                                    Experiance : {props.job.experiance}
                                </Typography>
                                <Typography paddingY={'1rem'}>
                                    Last Date : {props.job.lastDate}
                                </Typography>
                                <Typography paddingY={'1rem'} variant={'h6'}>
                                    About job:
                                </Typography>
                                <Typography paddingY={'1rem'} >
                                   {props.job.jobDescription}
                                </Typography>
                                <Typography paddingY={'1rem'}>
                                   Vacancy : {props.job.totalOpening}
                                </Typography>
                                <Typography paddingRight={'1rem'} display={'inline'}>
                                   Recruter Name : {props.job.recruterName}
                                </Typography>
                                <Typography display={'inline'}>
                                  Recruter Designation : {props.job.recruterDesignation}
                                </Typography>
                            </CardContent>
                            <Box display={'flex'} justifyContent={'center'}>
                                <CardActions disableSpacing>
                                <Button onClick={()=>handleApply(props.job.Job_id,user._id)}>Apply</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default PostPage
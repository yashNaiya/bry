import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const Post1 = (data) => {
    // console.log(data.location)
    const [place, setPlace] = useState('');
    // if(data.WorkFromHome == true){
    //      setloc("work from home")
    // }
    // else{
    //      setloc(loca)
    // }
    const wfm = data.WorkFromHome
    // console.log(wfm)
    
    return (
        <Card sx={{ margin: "1%" }} >
            <CardHeader
                action={
                    <Typography variant='h5' color='primary.main' fontWeight={100} >
                        {/* {data.data_salary} */}
                        Rs {data.salary}
                    </Typography>
                }
                title={data.title}
                subheader= {data.WorkFromHome === 't'?'Work From Home' : data.location}
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
                <IconButton>
                    <Button>Apply</Button>
                </IconButton>
                <IconButton >
                    <ReadMoreIcon />
                </IconButton>
            </CardActions>
        </Card>

    )
}

export default Post1

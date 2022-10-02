import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Button } from '@mui/material';

const Post = () => {
    return (
        <Card sx={{ margin: "1%" }} >
            <CardHeader
                action={
                    <Typography variant='h5' color='primary.main' fontWeight={100} >
                        Rs. 8+
                    </Typography>
                }
                title="Web Development"
                subheader="work from home/location"
            />
            <CardContent>
                <Typography variant='button'>
                    type
                </Typography>
                <Typography paddingY={'1rem'}>
                    company name
                </Typography>
                <Typography paddingRight={'1rem'} display={'inline'}>
                    Recruiter name
                </Typography>
                <Typography display={'inline'}>
                    Recruiter designation
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

export default Post

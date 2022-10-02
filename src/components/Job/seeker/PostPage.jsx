import { Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Button } from '@mui/material';

const PostPage = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} bgcolor={'primary.light'} width={'100%'}>
            <Box width={'70%'}>
                <form>
                    <Card sx={{ margin: "1%" }} >
                        <CardHeader
                            title="Web Development"
                            subheader="work from home/location"
                        />
                        <CardContent>
                            <Typography paddingY={'1rem'} color={'primary.main'} variant='h6'>
                                Rs. 8+
                            </Typography>
                            <Typography paddingY={'1rem'} variant='button'>
                                type :
                            </Typography>
                            <Typography paddingY={'1rem'}>
                                company name :
                            </Typography>
                            <Typography paddingY={'1rem'}>
                                company website :
                            </Typography>
                            <Typography paddingY={'1rem'}>
                                experiance :
                            </Typography>
                            <Typography paddingY={'1rem'}>
                                last date :
                            </Typography>
                            <Typography paddingY={'1rem'} variant={'h6'}>
                                About job:
                            </Typography>
                            <Typography paddingY={'1rem'} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, placeat consectetur libero officia architecto, possimus sed totam, iusto veniam dolorem laudantium modi minima error asperiores.
                            </Typography>
                            <Typography paddingY={'1rem'}>
                                opening :
                            </Typography>
                            <Typography paddingRight={'1rem'} display={'inline'}>
                                Recruiter name
                            </Typography>
                            <Typography display={'inline'}>
                                Recruiter designation
                            </Typography>
                        </CardContent>
                        <Box display={'flex'} justifyContent={'center'}>
                            <CardActions disableSpacing>
                                <Button variant={'contained'}>Apply</Button>
                            </CardActions>
                        </Box>
                    </Card>
                </form>
            </Box>
        </Box>
    )
}

export default PostPage
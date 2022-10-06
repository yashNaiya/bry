import { Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const PostPage = (props) => {
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
        </Box>
    )
}

export default PostPage
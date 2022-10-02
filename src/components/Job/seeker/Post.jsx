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
import axios from 'axios';
import Post1 from './post1';

const Post = () => {
    
    const [dataTable, setDataTable] = useState([]);
    //  console.log(dataTable)
    useEffect(() => {
      axios.get('/addjob')
        .then(res => setDataTable(res.data))
        .catch(err => console.log(err))
    }, []);
    // console.log(dataTable)

    // const JobData = dataTable.map((data) => {
    //      return data
    // } )

    
    return (
        dataTable.map((data,i) => {
            // console.log(i)
            return <Post1 type = {data.type} companyName={data.companyName}  salary={data.salary} recruterName={data.recruterName} recruterDesignation={data.recruterDesignation} title={data.title} WorkFromHome={data.WorkFromHome} location={data.location} />
        })
    )
}
       
    

export default Post

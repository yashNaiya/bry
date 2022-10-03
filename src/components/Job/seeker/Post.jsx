import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post1 from './post1';

const Post = (props) => {
    console.log(props.filter)
    const [dataTable, setDataTable] = useState([]);
    useEffect(() => {
        axios.get('/addjob')
            .then(res => setDataTable(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        dataTable.map((data, i) => {
            return <Post1 type={data.type} companyName={data.companyName} salary={data.salary} recruterName={data.recruterName} recruterDesignation={data.recruterDesignation} title={data.title} WorkFromHome={data.WorkFromHome} location={data.location} />
        })
    )
}



export default Post

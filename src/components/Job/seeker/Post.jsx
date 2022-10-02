import React from 'react';
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

    // const JobData = dataTable.map((data) => {
    //      return data
    // } )


    return (
        dataTable.map((data, i) => {
            // console.log(data)
            // console.log(i)
            return <Post1 type={data.type} companyName={data.companyName} salary={data.salary} recruterName={data.recruterName} recruterDesignation={data.recruterDesignation} title={data.title} WorkFromHome={data.WorkFromHome} location={data.location} />
        })
    )
}



export default Post

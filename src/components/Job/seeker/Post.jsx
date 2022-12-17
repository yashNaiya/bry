import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post1 from './post1';

const Post = (props) => {
    console.log(props)
    const [dataTable, setDataTable] = useState([]);
    useEffect(() => {
        axios.get('/addjob')
            .then(res => setDataTable(res.data))
            .catch(err => console.log(err))
    }, []);
    
    const dataTable1 =  dataTable.filter(data =>{
        // console.log(data)
        //  console.log(data.type+" "+props.filter.mode[0])
        return  data.location === props.filter.location[0] || (data.experiance === props.filter.mode[0] || data.WorkFromHome === props.filter.mode[0] || data.salary > props.filter.mode[0] || data.type === props.filter.mode[0] )
    })

    console.log(dataTable1)

    if(props.filter.location[0] || props.filter.field[0] || props.filter.mode[0]){
    return (
        dataTable1.map((data, i) => {
            return <Post1 key={data._id} Job_id={data._id} user_id_In_Job={data.UserID} type={data.type} companyName={data.companyName} salary={data.salary} recruterName={data.recruterName} recruterDesignation={data.recruterDesignation} title={data.title} WorkFromHome={data.WorkFromHome} field={data.field} location={data.location} setJob={props.setJob} showPost = {props.showPost} lastDate ={data.lastDate} jobDescription={data.jobDescription} website={data.website} experiance={data.experiance} totalOpening={data.totalOpening} />
        })
    )
   }
   else{
    return (
        dataTable.map((data, i) => {
            return <Post1 key={data._id} Job_id={data._id} user_id_In_Job={data.UserID} type={data.type} companyName={data.companyName} salary={data.salary} recruterName={data.recruterName} recruterDesignation={data.recruterDesignation} title={data.title} WorkFromHome={data.WorkFromHome} location={data.location} setJob={props.setJob} showPost = {props.showPost} lastDate ={data.lastDate} jobDescription={data.jobDescription} website={data.website} experiance={data.experiance} totalOpening={data.totalOpening} />
        })
    )

   }

}



export default Post

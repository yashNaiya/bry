import { Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Directory = (props) => {
    console.log(props.filter)

    const [dataTable, setDataTable] = useState([]);
    //  console.log(dataTable)
    useEffect(() => {
        axios('/register/valid')
            .then(res => setDataTable(res.data))
            .catch(err => console.log(err))
    }, []);

     const dataTable1 = dataTable.filter(data=>{
        console.log(data.Batch);
        console.log(props.filter.cur_loc[0]);
        return data.Job_role === props.filter.role[0] || data.Batch === props.filter.joining[0] || data.Passyear === props.filter.graduating[0]  || data.Branch === props.filter.dept[0] || data.Curr_loc === props.filter.cur_loc[0]
     })

    //  console.log(dataTable1);

     if(props.filter.role[0] || props.filter.joining[0] || props.filter.dept[0] || props.filter.cur_loc[0]){

        return (
            <Box flex={4}
                display='flex'
                flexDirection={'row'}
                justifyContent={"space-evenly"}
                flexWrap={"wrap"}
                sx={{
                    padding: { xs: 'none', sm: '10px' }
                }}>
                {
                    dataTable1.map((data)=>{return <Card data={data}/>})
                }
            </Box>
        )

     }
     else{
    
 
  
    return (
        <Box flex={4}
            display='flex'
            flexDirection={'row'}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
            sx={{
                padding: { xs: 'none', sm: '10px' }
            }}>
            {
                dataTable.map((data)=>{return <Card data={data}/>})
            }
        </Box>
    )
        }
}

export default Directory

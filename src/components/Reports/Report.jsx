import { Box } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables'
import axios from 'axios';

const Report = (props) => {
    const [dataTable, setDataTable] = useState([]);
    //  console.log(dataTable)
    useEffect(() => {
        axios('/register/valid')
            .then(res => setDataTable(res.data))
            .catch(err => console.log(err))
    }, []);
   
    //  console.log(dataTable)

     const columns = ["name", "email", "ID", "Interest","Workshop","Lecture"]
    const options = {
        filter: true,
        selectableRows: false,
        filterType: "dropdown",
        responsive: "standard",
        rowsPerPage: 10,
        print: false,
        pagination: false,
        onRowClick: (rowData) => {

            axios.get(`/register/${rowData[1]}`)   
           .then(response => {
            props.setUser(JSON.stringify(response.data))
            props.setCard(true)
           
            
        })
           .catch(err => console.log(err))

            // console.log(rowData[1])
            // console.log(columns[0])
           
        }
    }

        return (
            <Box flex={6}
                display='flex'
                flexDirection={'column'}
                sx={{
                    padding: { xs: 'none', sm: '10px' }
                }}>

            <MUIDataTable
                title={'Reports'}
                data={dataTable}
                columns={columns}
                options={options} />

        </Box>
    )
}

export default Report

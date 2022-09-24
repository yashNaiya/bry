import { Box } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables'
import axios from 'axios';

const Report = () => {
    const [dataTable, setDataTable] = useState([]);
    //  console.log(dataTable)
    useEffect(() => {
      axios('/register/valid')
        .then(res => setDataTable(res.data))
        .catch(err => console.log(err))
    }, []);
   
     console.log(dataTable)

     const columns = ["name", "ID", "Interest", "ID","Batch","_id"]
    const options = {
        filter: true,
        selectableRows: true,
        filterType: "dropdown",
        responsive: "stacked",
        rowsPerPage: 10,
        print:false,
        pagination:false
    }
    const data = [
        ["Joe James", "Test Corp", "Yonkers"],
        
    ];

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

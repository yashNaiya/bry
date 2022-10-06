import { Box } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Applications = () => {

    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('sessionData')))
    const [dataTable, setDataTable] = useState([]);
  //  console.log(dataTable)
  useEffect(() => {
    axios.post(`/getAppliedJob/${user._id}`)
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

   console.log(dataTable)

    const columns = ["companyName","website","recruterName","salary","location","title"];


    const options = {
        filter: false,
        selectableRows: false,
        filterType: "dropdown",
        responsive: "standard",
        rowsPerPage: 10,
        print: false,
        download:false,
        pagination: false,
    }

    return (

        <Box
            flex={6}
            display='flex'
            flexDirection={'column'}
            sx={{
                padding: { xs: 'none', sm: '10px' }
            }}>

            <MUIDataTable
                title={'My Applications'}
                data={dataTable}
                columns={columns}
                options={options} />

        </Box>
    )
}

export default Applications
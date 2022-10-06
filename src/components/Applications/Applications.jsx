import { Box } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import React from 'react'

const Applications = () => {

    const columns = ["Name", "Company", "City", "State"];

    const data = [
     ["Joe James", "Test Corp", "Yonkers", "NY"],
     ["John Walsh", "Test Corp", "Hartford", "CT"],
     ["Bob Herm", "Test Corp", "Tampa", "FL"],
     ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

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
                data={data}
                columns={columns}
                options={options} />

        </Box>
    )
}

export default Applications
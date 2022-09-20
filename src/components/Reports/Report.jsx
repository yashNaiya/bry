import { Box } from '@mui/material'
import React from 'react'
import MUIDataTable from 'mui-datatables'

const Report = () => {


    const columns = ["Name", "Company", "City", "State"];
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
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
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
                    data={data}
                    columns={columns}
                    options={options} />
            
        </Box>
    )
}

export default Report

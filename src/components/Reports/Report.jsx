import { Box } from '@mui/material'
import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'


const Report = (props) => {

    const columns = ["Name", "Company", "City", "State"];
    const options = {
        filter: true,
        selectableRows: false,
        filterType: "dropdown",
        responsive: "stacked",
        rowsPerPage: 10,
        print: false,
        pagination: false,
        onRowClick: (rowData) => {
            console.log(rowData[0])
            // console.log(columns[0])
            props.setUser(rowData)
            props.setCard(true)
        }
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

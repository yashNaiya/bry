import { Box, Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MUIDataTable from 'mui-datatables'
import { useNavigate } from 'react-router-dom';


const JobDetail = (props) => {
  const navigate = useNavigate()

  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filter: true,
        selectableRows: false,
        filterType: "dropdown",
        responsive: "standard",
        print: false,
        pagination: false,
        onRowClick: (data) => {
         localStorage.setItem("viewedProfile",JSON.stringify(data))
        console.log(localStorage.getItem("viewedProfile"))
         window.open('/viewProfile', '_blank', 'noopener,noreferrer');
      }
  };

  return (
    <Box minHeight={"100vh"} width={"90%"} m={'3rem'} sx={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;" }}>
      <Stack direction="column">
        <Box>
          <Button onClick={() => {
            props.showPost(false)
          }}>
            <ArrowBackIcon />
          </Button>
        </Box>
        <Box>
          <Card sx={{ margin: "1%" }}>
            <CardHeader
              title="Title"
              subheader="subheader"
            />
            <CardContent>
              <Typography paddingY={'1rem'} color={'primary.main'} variant='h6'>
                Salary :"6LPA"
              </Typography>
              <Typography paddingY={'1rem'} variant='button'>
                Type : "type"
              </Typography>
              <Typography paddingY={'1rem'}>
                Company Name : "companyName"
              </Typography>
              <Typography paddingY={'1rem'}>
                Company Website : "website"
              </Typography>
              <Typography paddingY={'1rem'}>
                Experiance : "experiance"
              </Typography>
              <Typography paddingY={'1rem'}>
                Last Date : "lastDate"
              </Typography>
              <Typography paddingY={'1rem'} variant={'h6'}>
                About job:
              </Typography>
              <Typography paddingY={'1rem'} >
                "jobDescription"
              </Typography>
              <Typography paddingY={'1rem'}>
                Vacancy : "totalOpening"
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <MUIDataTable
            title={"Applications"}
            data={data}
            columns={columns}
            options={options}
          />
        </Box>
      </Stack>

    </Box>
  )
}

export default JobDetail
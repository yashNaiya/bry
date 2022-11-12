import { Box, Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MUIDataTable from 'mui-datatables'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';

const JobDetail = (props) => {
  // console.log(props)
  const navigate = useNavigate()

    const [dataTable, setDataTable] = useState([]);

   useEffect(() => {
    axios.post(`/getAppliedusers/${props.job._id}`)
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);
  
  // console.log(dataTable)
 


  const columns = ["name", "ID", "email", "Batch","Branch"];

  // const data = [
  //   ["Joe James", "Test Corp", "Yonkers", "NY"],
  //   ["John Walsh", "Test Corp", "Hartford", "CT"],
  //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //   ["James Houston", "Test Corp", "Dallas", "TX"],
  // ];

  const options = {
    filter: true,
        selectableRows: false,
        filterType: "dropdown",
        responsive: "standard",
        print: false,
        pagination: false,
        onRowClick: (data) => {
          // console.log(data[2])

          axios.get(`/register/${data[2]}`)
          .then(function (response) {
            // console.log(response.data)
            localStorage.setItem("viewedProfile",JSON.stringify(response.data))
          })
          .catch(err => console.log(err));
          // console.log(dataofuser)
         
        //  console.log(localStorage.getItem("viewedProfile"))
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
              title={props.job.title}
              subheader="subheader"
            />
            <CardContent>
              <Typography paddingY={'1rem'} color={'primary.main'} variant='h6'>
                Salary : {props.job.salary}
              </Typography>
              <Typography paddingY={'1rem'} variant='button'>
                Type : {props.job.type}
              </Typography>
              <Typography paddingY={'1rem'}>
                Company Name : {props.job.companyName}
              </Typography>
              <Typography paddingY={'1rem'}>
                Company Website : {props.job.website}
              </Typography>
              <Typography paddingY={'1rem'}>
                Experiance : {props.job.experiance}
              </Typography>
              <Typography paddingY={'1rem'}>
                Last Date : {props.job.lastDate}
              </Typography>
              <Typography paddingY={'1rem'} variant={'h6'}>
                Location : {props.job.location}
              </Typography>
              <Typography paddingY={'1rem'} >
                jobDescription : {props.job.jobDescription}
              </Typography>
              <Typography paddingY={'1rem'}>
                Vacancy : {props.job.totalOpening}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <MUIDataTable
            title={"Applications"}
            data={dataTable}
            columns={columns}
            options={options}
          />
        </Box>
      </Stack>

    </Box>
  )
}

export default JobDetail
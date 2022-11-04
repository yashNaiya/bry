import axios from 'axios';
import { useEffect, useState } from 'react';
import TableData  from './TableData';
import {Box, Typography} from '@mui/material'
import React  from 'react';


function Authenticate() {
  const [dataTable, setDataTable] = useState([]);
  //  console.log(dataTable)
  useEffect(() => {
    axios('/register/notRegistered')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Id No', value: 'ID' },
    { heading: 'E_mail', value: 'email' },
    { heading: 'Number', value: 'number' },
    { heading: 'Batch', value: 'Batch' },
  ]

  return (
    <Box display={'flex'} alignItems='center' flexDirection={'column'} p={5}>
      <Typography variant='h4' color={'primary'} fontWeight={500}>New User Registers</Typography>
      <TableData data = {dataTable} column={column}/>
    </Box>
  );
}

export default Authenticate;
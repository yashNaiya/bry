import axios from 'axios';
import { useEffect, useState } from 'react';
import './App1.css';
import Table  from './Table';

function App1() {
  const [dataTable, setDataTable] = useState([]);
   console.log(dataTable)
  useEffect(() => {
    axios('/register')
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
    <div className="App1">
      <h1>Alumini List</h1>
      <Table data = {dataTable} column={column}/>
    </div>
  );
}

export default App1;
import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const TableData = ({ data, column }) => {
  return (
    <Table
      sx={{
        width: "100%",
        margin: "2rem auto",
        maxWidth: "900px",
        borderCollapse: 'collapse'
      }}>
      <TableHead>
        <TableRow>
          {column.map((item, index) => <TableHeadItem item={item} />)}
          <TableCell align='center'>
            Authenticate
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => <TableRows item={item} column={column} />)}
      </TableBody>
    </Table>
  )
}


const AddListener = ()=>{

}

const RemoveListener = ()=>{

}

const TableHeadItem = ({ item }) => <td align='center'>{item.heading}</td>
const TableRows = ({ item, column }) => (
  <TableRow>
    {column.map((columnItem, index) => {

      if (columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return (
          <>
            <TableCell align={'center'}>
              {item[itemSplit[0]][itemSplit[1]]}
            </TableCell>
          </>
        )
      }

      return (
        <TableCell align='center' >
          {item[`${columnItem.value}`]}
        </TableCell>
      )
    })}
    <TableCell align='center' sx={{display:'flex',justifyContent:'space-evenly'}}>
      <Button onClick={AddListener} variant='contained'>Add</Button>
      <Button onClick={RemoveListener} variant='contained'>Remove</Button>
    </TableCell>
  </TableRow>
)

export default TableData
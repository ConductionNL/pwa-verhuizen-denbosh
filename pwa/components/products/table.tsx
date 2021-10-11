import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, price, description, other) {
  return { name, price, description, other };
}

const rows = [
  createData('Appel', 159, 'Mooie groene appel', 'Houdbaar tot 21 april',),
  createData('Appel', 159, 'Mooie groene appel', 'Houdbaar tot 21 april',),
  createData('Appel', 159, 'Mooie groene appel', 'Houdbaar tot 21 april',),
];


export default function ProductTable() {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Naam</TableCell>
            <TableCell align="right">Prijs</TableCell>
            <TableCell align="right">Beschrijving</TableCell>
            <TableCell align="right">Overig</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.other}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

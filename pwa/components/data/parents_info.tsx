import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


export default function ParentsInfo({parents = null}) {

  return (<>
      <h4>Uw ouders</h4>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Naam</TableCell>
              <TableCell align="right">Verblijfplaats</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              parents !== null &&
              parents.map((row) => (
                <TableRow key={row.bsn}>
                  <TableCell align="left">{row.naam.aanschrijfwijze}</TableCell>
                  <TableCell align="right">{row.verblijfplaats.woonplaats}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )};

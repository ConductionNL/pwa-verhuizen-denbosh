import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@mui/x-data-grid';
import {useGet} from "restful-react";

export default function LoggingTable() {

  var { data: logs } = useGet({
    path: "gateways/logging/verwerkings_acties"
  });

  /* lets catch hydra */
  if (logs != null && logs["hydra:member"] !== undefined) {
    logs = logs["hydra:member"];
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    {
      field: 'actieNaam',
      headerName: 'Actie',
      flex: 1,
    },
    {
      field: 'handelingsNaam',
      headerName: 'Handeling',
      flex: 1,
    },
    {
      field: 'verwerkingsnaam',
      headerName: 'Verwerking',
      flex: 1,
    }
  ];

  return (
   <div style={{ height: 400, width: '100%' }}>
     { logs ? (
         <DataGrid
           rows={logs}
           columns={columns}
           pageSize={100}
           rowsPerPageOptions={[100]}
           checkboxSelection
           disableSelectionOnClick
         />
       )
       :
       (
         <DataGrid
           rows={[]}
           loading={true}
           columns={columns}
           pageSize={100}
           rowsPerPageOptions={[100]}
           checkboxSelection
           disableSelectionOnClick
         />
       )
     }

    </div>
  );
}

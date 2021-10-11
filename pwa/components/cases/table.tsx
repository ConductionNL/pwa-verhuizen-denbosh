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
import {Link} from "@material-ui/core";

export default function ClaimsTable() {

  var { data: cases } = useGet({
    path: "gateways/zaken/zaken"
  });

  /* lets catch hydra */
  if (cases != null && cases["results"] !== undefined) {
    cases = cases["results"];

    for (let i = 0; i < cases.length; i++) {
      cases[i].id = cases[i].identificatie;
      cases[i].status = 'In behandeling';
    }
  }

  const columns = [
    { field: 'id', headerName: 'Identificatie', flex: 1},
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'registratiedatum',
      headerName: 'Registratiedatum',
      flex: 1,
    },
    {
      field: "link",
      headerName: " ",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return <Link href={`/cases/${cellValues.row.id}`}>Bekijken</Link>;
      }
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      { cases ? (
          <DataGrid
            rows={cases}
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

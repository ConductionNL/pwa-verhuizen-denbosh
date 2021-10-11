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

export default function ClaimsTable() {

  var { data: documents } = useGet({
    path: "gateways/documenten/enkelvoudiginformatieobjecten"
  });

  /* lets catch hydra */
  if (documents != null && documents["results"] !== undefined) {
    documents = documents["results"];

    for (let i = 0; i < documents.length; i++) {
      documents[i].id = documents[i].identificatie;
    }
  }

  const columns = [
    { field: 'id', headerName: 'Identificatie', flex: 1 },
    {
      field: 'bestandsnaam',
      headerName: 'Naam',
      flex: 1,
      editable: true,
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      { documents ? (
          <DataGrid
            rows={documents}
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

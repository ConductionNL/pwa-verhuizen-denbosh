import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useGet} from "restful-react";
import Button from "@material-ui/core/Button";
import {documentDownload} from "../utility/DocumentDownload";

export default function ClaimsTable() {

  var { data: claims } = useGet({
    path: "gateways/waardepapieren-register/certificates"
  });

  /* lets catch hydra */
  if (claims != null && claims["hydra:member"] !== undefined) {
    claims = claims["hydra:member"];
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
    },
    {
      field: 'organization',
      headerName: 'Organisatie',
      flex: 1,
    },
    {
      field: "Pdf",
      headerName: " ",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              documentDownload(cellValues.row.document, cellValues.row.type, '.pdf')
            }}
          >
            Pdf
          </Button>
        );
      }
    },
    {
      field: "QR",
      headerName: " ",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              documentDownload(cellValues.row.image, cellValues.row.type, '.png')
            }}
          >
            QR
          </Button>
        );
      }
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      { claims ? (
        <DataGrid
          rows={claims}
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

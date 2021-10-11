import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "@material-ui/core";

export default function MessagesTable() {

  function createData(id, name, afzender, ontvangen) {
    return { id, name, afzender, ontvangen };
  }

  const rows = [
    createData('1', 'Aanslag', 'Gemeente Zaandam', '1 september 2021'),
    createData('2', 'Parkeerbon', 'Gemeente Zaandam', '1 september 2021'),
    createData('3', 'Taxatieverslag', 'Gemeente Zaandam', '1 september 2021'),
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    {
      field: 'name',
      headerName: 'Naam',
      flex: 1,
    },
    {
      field: 'afzender',
      headerName: 'Afzender',
      flex: 1,
    },
    {
      field: 'ontvangen',
      headerName: 'Ontvangen',
      flex: 1,
    },
    {
      field: "link",
      headerName: " ",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return <Link href={`/messages/${cellValues.row.id}`}>Lezen</Link>;
      }
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      { rows ? (
          <DataGrid
            rows={rows}
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

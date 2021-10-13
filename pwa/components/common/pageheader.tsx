import React from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import List from "@mui/material/List";

const PageHeader = ({ title="Welcome to Demodam!", h1=false, description="default-description"}) => {

    return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/user" >
          Home
        </Link>
        <Typography color="textPrimary">{title}</Typography>
      </Breadcrumbs>
      {
        h1 == true ?
        <Typography variant="h1">
          {title}
        </Typography> :
          <Typography variant="h4">
            {title}
          </Typography>
      }

    </>
  );

}

export default PageHeader;

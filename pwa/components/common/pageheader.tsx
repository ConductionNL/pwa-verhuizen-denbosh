import React from "react";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import List from "@material-ui/core/List";

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

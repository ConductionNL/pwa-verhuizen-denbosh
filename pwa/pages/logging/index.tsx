import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import LoggingTable from "../../components/logging/table";
import Box from "@material-ui/core/Box";

function Index() {

  const title = 'Mijn verwerkingen';

  return <>
    <Layout title={title} description="waar kan ik deze description zien" >
      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <LoggingTable />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index

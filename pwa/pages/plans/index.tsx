import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import PlansTable from "../../components/plans/table";

function Index() {

  const title = 'Mijn plannen';
  const description = 'Jouw persoonlijke plannen';
  const plans = [
    {
      id: 1,
      name: "Plan 1",
      description: "Omschrijving van plan 1"
    },
    {
      id: 2,
      name: "Plan 2",
      description: "Omschrijving van plan 2"
    }];

  return <>
    <Layout title={title} description="waar kan ik deze description zien"  >
      <Grid container >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>

          <PlansTable plans={plans}/>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index

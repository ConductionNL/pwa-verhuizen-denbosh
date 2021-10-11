import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import PageHeader from "../../components/common/pageheader";
import Typography from '@material-ui/core/Typography';

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import ActionMenu from "../../components/common/actionmenu";
import ArrangementsCards from "../../components/arrangements/cards";
import {makeStyles} from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import {Link} from "@material-ui/core";

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

function Index() {
  const classes = useStyles();
  const title = 'Werk en Inkomen';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9} spacing={6}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>
            <p>Een regeling is een gemeentelijk product waar je recht op kan hebben of recht voor kunt aanvragen bij de overheid.</p>
          </Box>

          {/*If not logged in:*/}
          <Alert severity="warning" style={{marginBottom: "10px"}}>
            <AlertTitle>Inloggen</AlertTitle>
            Om uw regelingen te personaliseren moet u eerst inloggen! — Klik <strong><Link href={"/user"}>hier</Link></strong> om in te loggen.
          </Alert>

          <ArrangementsCards/>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index

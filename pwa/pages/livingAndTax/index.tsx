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
import PaperCard from "../../components/common/paperCard";
import AddressInfo from "../../components/data/address_info_nopaper";
import {useGet, Poll, Get} from "restful-react";

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

function Index() {
  const classes = useStyles();
  const title = 'Wonen en Belasting';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <Box paddingTop={3} paddingBottom={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Kadastrale gegevens"
                  secondaryTitle="Bron: Basisregistratie Kadaster & Gemeenten"
                  description={<AddressInfo id={999995935} showAll={false}/>}
                  link="/data/999995935"
                  linkText="Bekijk"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Belasting"
                  secondaryTitle="Bron: Gemeentenlijke belasitingen"
                  description="De gemeente heft een aantal belastingen zo als bijvoorbeeld onroerendezaakbelastingen  (OZB) aan de hand van de WOZ waarde van uw woning. Via dit portaal kun u uw belastingen inzien "
                  link="/taxes"
                  linkText="Bekijk belastingen"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index

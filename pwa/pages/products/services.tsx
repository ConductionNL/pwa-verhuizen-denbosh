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
import StandardCard from "../../components/common/card";
import PaperCard from "../../components/common/paperCard";

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

function Index() {
  const classes = useStyles();
  const title = 'Diensten';

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

          <Box paddingTop={3} paddingBottom={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                <PaperCard
                  title="Advies bij schulden"
                  description="Als ondernemer kunt u te maken krijgen met schulden. Zowel op zakelijk als op persoonlijk vlak. In Zaanstad zijn er mogelijkheden om via het BBZ hulp te krijgen bij uw schulden. Neem voor advies bij schulden contact op met gemeente Zaanstad."
                  link="https://www.zaanstad.nl/mozard/!suite86.scherm0325?mVrg=221"
                  linkText="Neem contact op met de gemeente"
                />
              </Grid>

              <Grid item xs={12} sm={6} >
                <PaperCard
                  title="Hulp bij mijn financiën"
                  description="Voor mensen die dreigen ten onder te gaan aan een schuldenlast.  En advies zoeken in het gezond houden van je financiële huishouding."
                  link="https://schuldhulpmaatjezaanstad.nl/"
                  linkText="Ga naar SchuldHulpMaatje Zaanstad"
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

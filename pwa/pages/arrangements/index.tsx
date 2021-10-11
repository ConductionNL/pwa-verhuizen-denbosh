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
import Card from "../../components/arrangements/card";
import PaperCard from "../../components/common/paperCard";
import CheckIcon from '@material-ui/icons/Check';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

function Index() {
  const classes = useStyles();
  const title = 'Regelingen';

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

          {/* TODO: If not logged in:
          <Alert severity="warning" style={{marginBottom: "10px"}}>
            <AlertTitle>Inloggen</AlertTitle>
            Om uw regelingen te personaliseren moet u eerst inloggen! — Klik <strong><Link href={"/user"}>hier</Link></strong> om in te loggen.
          </Alert>: */}

          <Box paddingTop={3} paddingBottom={2}>
            <Alert severity="warning" style={{marginBottom: "10px"}}>
              <AlertTitle>Niet getoonde regelingen</AlertTitle>
              Reglingen waar u op grond van uw gegevens geen recht op heeft worden standaard niet weergeven, klik  <strong><Link href={"/user"}>hier</Link></strong> om deze toch te tonen.
            </Alert>


            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="TONK regeling"
                  secondaryTitle={<Chip icon={<CheckIcon />} label="U gebruikt deze regeling" variant="outlined" />}
                  description="De Tijdelijke Ondersteuning Noodzakelijke Kosten (TONK) is een tijdelijke eenmalige financiële ondersteuning voor als u een aanzienlijke inkomensterugval heeft als gevolg van de coronamaatregelen. En als u hierdoor problemen heeft met het betalen van uw woonkosten. Het gaat dan om de huur of hypotheek en de kosten van elektriciteit, gas en water en eventuele servicekosten."
                  link="https://www.zaanstad.nl/mozard/!suite86.scherm0325?mPag=2031&mNch=p3gq01vx8r"
                  linkText="Lees meer "
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Bijstandsuitkering"
                  secondaryTitle={<Chip  color="primary" icon={<CheckIcon />} label="U heeft recht op deze regeling" variant="outlined" />}
                  description="De uitkering volgens de Participatiewet (bijstand) is een geldbedrag per maand dat u krijgt van de gemeente, om in uw levensonderhoud te kunnen voorzien. Voor mensen met een inkomen onder 110% van het minimumloon en weinig of geen vermogen. "
                  link="https://www.zaanstad.nl/mozard/!suite86.scherm0325?mVrg=660"
                  linkText="Lees meer of vraag aan"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Individuele inkomenstoeslag (IIT)"
                  secondaryTitle={<Chip color="primary" icon={<CheckIcon />} label="U heeft recht op deze regeling" variant="outlined" />}
                  description="Een bedrag dat u ieder jaar krijgt bovenop uw minimuminkomen. Voor mensen die minimaal 5 jaar een minimum inkomen hebben (uitkering of werk). "
                  link="https://www.zaanstad.nl/mozard/!suite86.scherm0325?mVrg=702"
                  linkText="Lees meer of vraag aan"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Besluit bijstand zelfstandigen"
                  secondaryTitle={<Chip color="secondary" icon={<HelpOutlineIcon />} label="U heeft mogenlijk recht op deze regeling" variant="outlined" />}
                  description="Zelfstandigen kunnen in (tijdelijke) financiële problemen komen die het voortbestaan van hun bedrijf bedreigen. In bepaalde gevallen kunnen zij dan een beroep doen op het Besluit bijstandverlening zelfstandigen (Bbz). "
                  link="https://www.rijksoverheid.nl/onderwerpen/bijstand-voor-zelfstandigen-bbz"
                  linkText="Lees meer of vraag aan"
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

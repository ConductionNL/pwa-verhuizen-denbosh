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
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <Box paddingTop={3} paddingBottom={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Geregistreerde inkomen"
                  secondaryTitle="Bron: Basisregistratie Inkomen"
                  description="De Belastingdienst registreert uw inkomen. Overheidsorganisaties gebruiken dit inkomen om bijvoorbeeld de hoogte van uw toeslag, eigen bijdrage of toelage te berekenen."
                  link="/income/1"
                  linkText="Bekijk inkomen"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Regelingen"
                  secondaryTitle="Bron: landelijke regelingen service"
                  description="Een regeling is een gemeentelijk product waar je recht op kan hebben of recht voor kunt aanvragen bij de overheid. Via deze lijst ziet u waar u recht op heeft"
                  link="/arrangements"
                  linkText="Bekijk regelingen"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Mijn UWV"
                  secondaryTitle="Bron: mijn uwv"
                  description="Op MijnUWV regelt u uw persoonlijke zaken met UWV. Daarnaast vindt u hier gegevens over uw werk en inkomen."
                  link="https://mijn.uwv.nl/mijnuwv"
                  linkText="Ga naar Mijn UWV"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Mijn Pensioenoverzicht"
                  secondaryTitle="Bron: mijnpensioenoverzicht.nl"
                  description="Op mijnpensioenoverzicht.nl ziet u, naast uw AOW, hoeveel pensioen u hebt en bij welke pensioenuitvoerder (pensioenfonds of -verzekeraar). Ook ziet u wat uw nabestaanden krijgen als u overlijdt."
                  link="https://www.mijnpensioenoverzicht.nl/"
                  linkText="Ga naar MijnPensioenoverzicht"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Werk"
                  secondaryTitle="Bron: Digitaal Klantdossier voor Werk en Inkomen"
                  description="Het Digitaal Klantdossier voor Werk en Inkomen (DKD) geeft een overzicht van uw eigen gegevens die door gemeenten en UWV zijn vastgelegd. Het gaat hierbij om persoonsgegevens, arbeids- en uitkeringsgegevens en gegevens over opleiding en re-integratie."
                  link="https://www.werk.nl/werkzoekenden/gegevens-inzien"
                  linkText="Ga naar Digitaal Klantdossier"
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

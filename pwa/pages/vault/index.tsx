import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import {Tab, Tabs, Typography} from "@material-ui/core";
import ProofTable from "../../components/vault/claims";
import DocumentTable from "../../components/vault/documents";
import {makeStyles, Theme} from "@material-ui/core/styles";
import PaperCard from "../../components/common/paperCard";
import AddressInfo from "../../components/data/address_info";

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

// Uw kluis is een plaats waar u persoonsinformatie kunt opslaan en optioneel kunt delen, dit kunnen
// bewijzen zijn of claims (bijv. bewijs van verblijf) of documenten die nodig zijn voor een bepaalde
// regeling.

function Index() {
  const classes = useStyles();
  const title = 'Mijn Datakluis';

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
                  title="Waardepapieren"
                  secondaryTitle="Bron: Waardepapieren Register"
                  description="In sommige gevallen heeft u bewijspapieren nodig, bijvoorbeeld een uittreksel van uw woonhistorie of een inkomens verklaring. U kunt deze tegenwoordig ook digitaal aanvragen, inzien en delen met organisaties."
                  link="/claims"
                  linkText="Bekijk waardepapieren"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Documenten"
                  secondaryTitle="Bron: Document Managment Systeem"
                  description="Het kan zijn dat u vanuit de gemeenten documenten krijgt zo als aanslagen of herinneringen, daarnaast is het mogelijk dat u aan de gemeente documenten moet verstrekken zo als huurovereenkomsten. "
                  link="/documents"
                  linkText="Bekijk documenten"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Verwerkingen"
                  secondaryTitle="Bron: Verwerkingen Register"
                  description="De gemeente houdt nauwkeurig bij welke organisaties uw gegevens hebben gebruikt (verwerkt) en met wel doel dit was. Deze verwerkingen kunt u inzien via het verwerkingen register."
                  link="/logging"
                  linkText="Bekijk verwerkingen"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Machtigingen"
                  secondaryTitle="Bron: Instemmingen Register"
                  description="U kunt zelf bepalen welke organisaties of personen toegang hebben tot uw gegevens of namens u bepaalde handelingen mogen uitvoeren. Deze machtigingen kunt u hier beheren en aanmaken.  "
                  link="/authorizations"
                  linkText="Bekijk machtigingen"
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

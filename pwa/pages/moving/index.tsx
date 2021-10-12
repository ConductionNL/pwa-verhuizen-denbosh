import Button from "@mui/material/Button";
import React, {ReactNode} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@mui/material/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box} from "@mui/material";
import PaperCard from "../../components/common/paperCard";


function Index() {

  const title = 'Verhuizing doorgeven';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid item sm={12}>
        <PageHeader title={title}/>
        <br/>
        <h5>U gaat een verhuizing doorgeven in of naar de gemeente 's-Hertogenbosch.</h5>
        <br/>
        <h5>U moet in dit formulier inloggen met DigiD.</h5>
        <Button variant="outlined" color="primary">Inloggen</Button>
        <br/>
        <br/>
        <h5>U kunt hier starten met het verhuis proces.</h5>
        <Link href="/moving/address">
          <Button variant="outlined" color="primary">Starten</Button>
        </Link>
        {/*<Box paddingTop={3} paddingBottom={2}>*/}
        {/*  <Grid container spacing={2}>*/}
        {/*    <Grid item xs={12} sm={8} md={6}>*/}
        {/*      <PaperCard*/}
        {/*        title="Persoonsgegevens"*/}
        {/*        secondaryTitle="Bron: Basisregistratie Personen"*/}
        {/*        description="In de Basisregistratie Personen (BRP) zijn persoonsgegevens geregistreerd, zoals gegevens over geboorte, verhuizing, huwelijk en vertrek naar het buitenland."*/}
        {/*        link="/data/999995935"*/}
        {/*        linkText="Bekijk persoonsgegevens"*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} sm={8} md={6}>*/}
        {/*      <PaperCard*/}
        {/*        title="Verwerkingen"*/}
        {/*        secondaryTitle="Bron: Verwerkingen Register"*/}
        {/*        description="De gemeente houdt nauwkeurig bij welke organisaties uw gegevens hebben gebruikt (verwerkt) en met wel doel dit was. Deze verwerkingen kunt u inzien via het verwerkingen register."*/}
        {/*        link="/processes"*/}
        {/*        linkText="Bekijk verwerkingen"*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} sm={8} md={6}>*/}
        {/*      <PaperCard*/}
        {/*        title="Waardepapieren"*/}
        {/*        secondaryTitle="Bron: Waardepapieren Register"*/}
        {/*        description="In sommige gevallen heeft u bewijspapieren nodig, bijvoorbeeld een uittreksel van uw woonhistorie of een inkomens verklaring. U kunt deze tegenwoordig ook digitaal aanvragen, inzien en delen met organisaties."*/}
        {/*        link="/claims"*/}
        {/*        linkText="Bekijk waardepapieren"*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</Box>*/}
      </Grid>

    </Layout>
  </>
}

export default Index

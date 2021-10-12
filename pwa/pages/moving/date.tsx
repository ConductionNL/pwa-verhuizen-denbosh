import Button from "@material-ui/core/Button";
import React, {ReactNode} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, TextField} from "@material-ui/core";
import PaperCard from "../../components/common/paperCard";
import {useRouter} from "next/router";


function Index() {

  const title = 'Datum';

  const router = useRouter();

  const handleAddress = (event) => {
    event.preventDefault();

    // Session set address


    router.push("/moving/date")
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        {/*<Hidden smDown>*/}
        {/*  <Grid item md={3}>*/}
        {/*    Willen we deze action menu?*/}
        {/*    <ActionMenu/>*/}
        {/*  </Grid>*/}
        {/*</Hidden>*/}
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <br/>
          <h5>Wat wordt je nieuwe adres?</h5>
          <p>Vul je postcode, huisnummer en eventueel toevoeging in van het nieuwe adres.</p>

          <form onSubmit={handleAddress}>
            <TextField id="postalCode" label="Postcode" variant="outlined"/>
            <br/>
            <br/>
            <TextField id="houseNumber" label="Huisnummer" variant="outlined"/>
            <br/>
            <br/>
            <TextField id="houseNumberSuffix" label="Huisnummertoevoeging" variant="outlined"/>
            <br/>
            <br/>

            <Grid
              justify="space-between" // Add it here :)
              container>
              <Grid item>
                <Link href="/moving/address">
                  <Button variant="contained">Ga terug</Button>
                </Link>
              </Grid>
              <Grid item>
                <Button color="primary" type="submit" variant="contained">Volgende</Button>
              </Grid>
            </Grid>
          </form>
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
      </Grid>

    </Layout>
  </>
}

export default Index

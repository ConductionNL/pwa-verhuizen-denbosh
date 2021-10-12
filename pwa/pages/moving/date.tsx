import Button from "@material-ui/core/Button";
import React, {ReactNode} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useRouter} from "next/router";


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Index() {
  const classes = useStyles();
  const title = 'Verhuizen';
  const router = useRouter();

  const handleAddress = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/date")
  }
  const [value, setValue] = React.useState(null);

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            Willen we deze action menu?
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <br/>
          <h5>Wanneer ga je verhuizen?</h5>
          <p>Kies je verhuisdatum in de onderstaande kalender. De verhuisdatum mag maximaal 28 dagen in de toekomst liggen.</p>

          <form onSubmit={handleAddress}>
            <TextField
              id="date"
              label="Verhuisdatum"
              type="date"
              defaultValue="2021-10-12"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{marginBottom: 20}}
            />

            <span style={{marginBottom: 20}}><p>Verhuisdaum: </p></span>

            <Grid
              justify="space-between" // Add it here :)
              container>
              <Grid item>
                <Button variant="contained"> Ga terug</Button>
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

import Button from "@mui/material/Button";
import React, {ReactNode} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@mui/material/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import PaperCard from "../../components/common/paperCard";
import SendIcon from '@mui/icons-material/Send';
import {ChevronRight} from "@mui/icons-material";

function Index() {

  const title = 'Verhuizing doorgeven';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid item sm={12}>
        <div style={{textAlign: "center"}}>
          <Typography color="#19224C" fontWeight="bold" mt='40px' mb='40px' variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="h6" color="#19224C">
            U gaat een verhuizing doorgeven in of naar de gemeente 's-Hertogenbosch.
          </Typography>
          <br/>
          <Typography variant="h6" color="#19224C" mb="40px">
            U moet in dit formulier inloggen met DigiD.
          </Typography>
          <Link href="/moving/address">
            <Button variant="contained" style={{backgroundColor: "#F5F5F5", color: "black", marginBottom: '20px'}} endIcon={<ChevronRight />}>
              <img style={{width: '40px', marginRight: '10px'}} src="https://www.logius.nl/sites/default/files/afbeeldingen/producten/digid_eo_rgb_100px_4.png" alt=""/>Inloggen Met DigiD
            </Button>
          </Link>
          <div>
            <Typography variant="p" fontWeight="bold">
              Heeft u nog geen DigiD?
            </Typography>
            <br/>
            <Typography variant="p">
              Vraag uw DigiD aan op <a href="https://www.digid.nl" target="_blank">www.digid.nl</a>
            </Typography>
          </div>
        </div>
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

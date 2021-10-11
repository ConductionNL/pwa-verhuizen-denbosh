import React from 'react'
import Box from "@material-ui/core/Box";
import {useGet, Poll, Get} from "restful-react";
import {Paper, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


export default function OverviewInfo({zaak = null}) {

  const xsGridItem1 = 5
  const xsGridItem2 = 5

  return (
      <div style={{padding: "10px"}}>
        <Typography gutterBottom variant="h6" component="h2">
          Zaak informatie
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Identificatie:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              zaak != null && zaak.identificatie !== null &&
              <p>{zaak.identificatie}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Status:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              zaak != null && zaak.identificatie !== null &&
              <p>In behandeling</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Bron organisatie:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              zaak != null && zaak.bronorganisatie !== null &&
              <p>{zaak.bronorganisatie}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Verantwoordelijke organisatie:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              zaak != null && zaak.verantwoordelijkeOrganisatie !== null &&
              <p>{zaak.verantwoordelijkeOrganisatie}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Omschrijving:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              zaak != null && zaak.bronorganisatie !== null &&
              <p>Omschrijving van de zaak</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Toelichting:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              zaak != null && zaak.bronorganisatie !== null &&
              <p>Toelichting van de zaak</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Registratiedatum:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              zaak != null && zaak.registratiedatum !== null &&
              <p>{zaak.registratiedatum}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Startdatum:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              zaak != null && zaak.startdatum !== null &&
              <p>{zaak.startdatum}</p>
            }
          </Grid>
        </Grid>
      </div>
  );
}

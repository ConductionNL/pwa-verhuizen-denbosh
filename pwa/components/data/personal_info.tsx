import React from 'react'
import Box from "@material-ui/core/Box";
import {useGet, Poll, Get} from "restful-react";
import {Paper, Grid} from "@material-ui/core";


export default function PersonalInfo({id = null, addressInfo = true}) {
  const { data: person } = useGet({
    path: "gateways/brp/ingeschrevenpersonen/" + id,
  });
  // console.log(person)

  const xsGridItem1 = 5
  const xsGridItem2 = 5

  return (
    <Paper>
      <div style={{padding: "10px"}}>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Voornamen:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.naam.voornamen !== null &&
              <p>{person.naam.voornamen}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Geslachtsnaam:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.naam.geslachtsnaam !== null &&
              <p>{person.naam.geslachtsnaam}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Naamgebruik:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.naam.aanduidingNaamgebruik !== null &&
              <p>{person.naam.aanduidingNaamgebruik}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Geslacht:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.geslachtsaanduiding !== null &&
              <p>{person.geslachtsaanduiding}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Burgerservicenummer:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.burgerservicenummer !== null &&
              <p>{person.burgerservicenummer}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Geboortedatum:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.geboorte.datum.datum !== null &&
              <p>{person.geboorte.datum.datum}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Geboorteplaats:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.geboorte.plaats.omschrijving !== null &&
              <p>{person.geboorte.plaats.omschrijving}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Geboorteland:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.geboorte.land.omschrijving !== null &&
              <p>{person.geboorte.land.omschrijving}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Ingangsdatum geldigheid:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.datumEersteInschrijvingGBA.datum !== null &&
              <p>{person.datumEersteInschrijvingGBA.datum}</p>
            }
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}

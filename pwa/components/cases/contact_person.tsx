import React from 'react'
import Box from "@material-ui/core/Box";
import {useGet, Poll, Get} from "restful-react";
import {Paper, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


export default function ContactPerson({zaak = null}) {

  const xsGridItem1 = 5
  const xsGridItem2 = 5

  return (
    <div style={{padding: "10px"}}>
      <Typography gutterBottom variant="h6" component="h2">
        Contact persoon
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={xsGridItem1}>
          Naam:
        </Grid>
        <Grid item xs={xsGridItem2}>
            <p>Jan Jansen</p>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={xsGridItem1}>
          email:
        </Grid>
        <Grid item xs={xsGridItem2}>
            <p>jan@zaanstad.nl</p>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={xsGridItem1}>
          telefoon:
        </Grid>
        <Grid item xs={xsGridItem2}>
            <p>+31 71 234 5678</p>
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react'
import Box from "@material-ui/core/Box";
import {useGet} from "restful-react";
import {Grid, Paper} from "@material-ui/core";


export default function AddressInfo({id = null, showAll = true}) {
  if (person == null) {
    var { data: person } = useGet({
      path: "gateways/brp/ingeschrevenpersonen/" + id,
    });
  }
  // console.log(person)

  const xsGridItem1 = 5
  const xsGridItem2 = 5

  return (
      <div style={{padding: "10px"}}>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Straat:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.verblijfplaats != null && person.verblijfplaats.straat !== null &&
              <p>{person.verblijfplaats.straat}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Huisnummer:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.verblijfplaats != null && person.verblijfplaats.huisnummer !== null &&
              <p>{person.verblijfplaats.huisnummer}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Postcode:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.verblijfplaats != null && person.verblijfplaats.postcode !== null &&
              <p>{person.verblijfplaats.postcode}</p>
            }
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            Woonplaatsnaam:
          </Grid>
          <Grid item xs={xsGridItem2}>
            {
              person != null && person.verblijfplaats != null && person.verblijfplaats.woonplaats !== null &&
              <p>{person.verblijfplaats.woonplaats}</p>
            }
          </Grid>
        </Grid>
        {
          showAll == true &&
          <div>
            <Grid container spacing={0}>
              <Grid item xs={xsGridItem1}>
                Functie adres:
              </Grid>
              <Grid item xs={xsGridItem2}>
                {
                  person != null && person.verblijfplaats != null && person.verblijfplaats.functieAdres !== null &&
                  <p>{person.verblijfplaats.functieAdres}</p>
                }
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={xsGridItem1}>
                Datum aanvang:
              </Grid>
              <Grid item xs={xsGridItem2}>
                {
                  person != null && person.verblijfplaats != null && person.verblijfplaats.datumAanvangAdreshouding.datum !== null &&
                  <p>{person.verblijfplaats.datumAanvangAdreshouding.datum}</p>
                }
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={xsGridItem1}>
                Gemeente van inschrijving:
              </Grid>
              <Grid item xs={xsGridItem2}>
                {
                  person != null && person.verblijfplaats != null && person.verblijfplaats.gemeenteVanInschrijving.omschrijving !== null &&
                  <p>{person.verblijfplaats.gemeenteVanInschrijving.omschrijving}</p>
                }
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={xsGridItem1}>
                Datum inschrijving gemeente:
              </Grid>
              <Grid item xs={xsGridItem2}>
                {
                  person != null && person.verblijfplaats != null && person.verblijfplaats.datumInschrijvingInGemeente.datum !== null &&
                  <p>{person.verblijfplaats.datumInschrijvingInGemeente.datum}</p>
                }
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={xsGridItem1}>
                Ingangsdatum geldigheid:
              </Grid>
              <Grid item xs={xsGridItem2}>
                {
                  person != null && person.verblijfplaats != null && person.verblijfplaats.datumIngangGeldigheid.datum !== null &&
                  <p>{person.verblijfplaats.datumIngangGeldigheid.datum}</p>
                }
              </Grid>
            </Grid>
          </div>
        }
        <Grid container spacing={0}>
          <Grid item xs={xsGridItem1}>
            WOZ Waarde:
          </Grid>
          <Grid item xs={xsGridItem2}>
              <p>€ 350.000,-</p>
          </Grid>
        </Grid>
      </div>
  );
}

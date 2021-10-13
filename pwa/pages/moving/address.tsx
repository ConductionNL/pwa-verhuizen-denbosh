import Button from "@mui/material/Button";
import React, {ReactNode} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@mui/material/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, TextField} from "@mui/material";
import PaperCard from "../../components/common/paperCard";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import makeStyles from "@mui/styles/makeStyles";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  inputLength: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
}));


function Index() {

  const title = 'Adres';

  const router = useRouter();


  const checkInputs = () => {
    //gaat alles goed?
    let valid = true;

    //alle inputs ophalen
    let postalInput = document.getElementById('postalCode');
    let houseNumberInput = document.getElementById('houseNumber');
    let houseNumberSuffixInput = document.getElementById('houseNumberSuffix');

    return valid;
  }

  const handleAddress = (event) => {
    event.preventDefault();


    let valid = checkInputs();

    if (!valid) {
      return;
    }
    // Session set address


    router.push("/moving/date")
  }

  const classes = useStyles();

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>

        <Stepper currentStep={0}/>

        <Grid item sm={12}>
          <Typography variant="h4">
            Wat wordt je nieuwe adres?
          </Typography>
          <Typography mb="10px">
            Vul je postcode, huisnummer en eventueel toevoeging in van het nieuwe adres.
          </Typography>

          <form onSubmit={handleAddress}>
            <TextField id="postalCode" label="Postcode" variant="outlined" className={classes.inputLength}/>
            <br/>
            <br/>
            <TextField id="houseNumber" label="Huisnummer" variant="outlined" className={classes.inputLength}/>
            <br/>
            <br/>
            <TextField id="houseNumberSuffix" label="Huisnummertoevoeging" variant="outlined" className={classes.inputLength}/>
            <br/>
            <br/>

            <Grid
              justifyContent="space-between" // Add it here :)
              container>
              <Grid item>
                <Link href="/moving">
                  <Button variant="text" startIcon={<ChevronLeft />}> Ga terug</Button>
                </Link>
              </Grid>
              <Grid item>
                <Button color="primary" type="submit" variant="contained" endIcon={<ChevronRight />}>Ga verder</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

    </Layout>
  </>;
}

export default Index

import Button from "@mui/material/Button";
import React, {ReactNode, useState} from "react";
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
import {useGet} from "restful-react";
import {useUserContext} from "../../components/context/userContext";
import {useAppContext} from "../../components/context/state";

const useStyles = makeStyles((theme) => ({
  inputLength: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
}));


export default function Address() {

  const title = 'Adres';

  const [postalCode, setPostalCode] = useState("1339PC");
  const [houseNumber, setHouseNumber] = useState("49");
  const [houseNumberSuffix, setHouseNumberSuffix] = useState("");

  let context = useAppContext();
  const router = useRouter();
  const { data: info } = useGet({
    path: "/gateways/zaken/zaken",
    debounce: true,
  });

  if (info !== undefined) {
    console.log(info);
  }


  const handleAddress = () => {

    let postalCode = (document.getElementById('postalCode') as HTMLInputElement).value;
    let houseNumber = (document.getElementById('houseNumber') as HTMLInputElement).value;
    let suffix = (document.getElementById('houseNumber') as HTMLInputElement).value;

    if (postalCode.length != 0 && houseNumber.length != 0) {
      // const { data: info } = useGet({
      //   path: "/as/adressen",
      //   debounce: true,
      // });
      // console.log(info);
    }

  }

  const classes = useStyles();

  return (<>
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

          <form>
            <TextField onChange={handleAddress} id="postalCode" label="Postcode" variant="outlined" className={classes.inputLength}/>
            <br/>
            <br/>
            <TextField onChange={handleAddress} id="houseNumber" label="Huisnummer" variant="outlined" className={classes.inputLength}/>
            <br/>
            <br/>
            <TextField onChange={handleAddress} id="houseNumberSuffix" label="Huisnummertoevoeging" variant="outlined" className={classes.inputLength}/>
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
  </>);
}


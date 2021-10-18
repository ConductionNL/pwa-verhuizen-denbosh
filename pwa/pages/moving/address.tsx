import Button from "@mui/material/Button";
import React, {ReactNode, useEffect, useState} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@mui/material/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, TextField, Avatar} from "@mui/material";
import PaperCard from "../../components/common/paperCard";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import makeStyles from "@mui/styles/makeStyles";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useGet, useMutate} from "restful-react";
import {useUserContext} from "../../components/context/userContext";
import {useAppContext} from "../../components/context/state";
import {type} from "os";
import SearchIcon from '@mui/icons-material/Search';
import {ForwardRounded} from "@material-ui/icons";
import {updateRequest} from "../../components/utility/RequestHandler";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
      textAlign: "center",
    },
  }
}));

export default function Address() {

  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';

  const [results, setResults] = useState(null);

  const [postalCodeInputError, setPostalCodeInputError] = useState(false);
  const [postalCodeInputHelperText, setPostalCodeInputHelperText] = useState('');

  const [houseNumberInputError, setHouseNumberInputError] = useState(false);
  const [houseNumberInputHelperText, setHouseNumberInputHelperText] = useState('');

  let context = useAppContext();
  const router = useRouter();

  const checkInputs = () => {
    let valid = true;

    let postalCodeInput = (document.getElementById('postalCode') as HTMLInputElement);
    let houseNumberInput = (document.getElementById('houseNumber') as HTMLInputElement);

    setPostalCodeInputError(false);
    setPostalCodeInputHelperText('');
    setHouseNumberInputError(false);
    setHouseNumberInputHelperText('');

    if (postalCodeInput.value.length == 0) {
      valid = false;
      setPostalCodeInputError(true);
      setPostalCodeInputHelperText('postcode is verplicht');
    }

    if (houseNumberInput.value.length == 0) {
      valid = false;
      setHouseNumberInputError(true);
      setHouseNumberInputHelperText('huisnummer is verplicht');
    }

    return valid;
  }

  const handleAddress = () => {
    if (typeof window !== 'undefined') {

      let valid = checkInputs();

      if (!valid) {
        return;
      }

      let postalCode = (document.getElementById('postalCode') as HTMLInputElement).value;
      let houseNumber = (document.getElementById('houseNumber') as HTMLInputElement).value;
      let suffix = (document.getElementById('houseNumberSuffix') as HTMLInputElement).value;

      if (typeof postalCode === 'string') {
        postalCode = postalCode.toUpperCase();
      }

      fetch(context.apiUrl + "/gateways/as/adressen?postcode=" + postalCode + '&huisnummer=' + houseNumber + "&huisnummertoevoeging=" + suffix, {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then((data) =>  {
            setResults(data);
        });

      }
    }

  const classes = useStyles();

  const route = () => {
    router.push('/moving/date');
  }

  const processAddress = (item) => {

    if (item.huisnummertoevoeging !== null) {
      updateRequest(
        context,
        'adres',
        item.straat + " " + item.huisnummer + item.huisnummertoevoeging + ", " + item.postcode + " " + item.woonplaats
      )
    } else {
      updateRequest(
        context,
        'adres',
        item.straat + " " + item.huisnummer + ", " + item.postcode + " " + item.woonplaats
      )
    }

    router.push('/moving/date');
  }
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

          <TextField
            id="postalCode"
            label="Postcode"
            required
            variant="outlined"
            className={classes.inputStyle}
            error={postalCodeInputError}
            helperText={postalCodeInputHelperText}
          />
          <br/>
          <br/>
          <TextField
            id="houseNumber"
            label="Huisnummer"
            required
            variant="outlined"
            className={classes.inputStyle}
            error={houseNumberInputError}
            helperText={houseNumberInputHelperText}
          />
          <br/>
          <br/>
          <TextField id="houseNumberSuffix" label="Huisnummertoevoeging" variant="outlined"
                     className={classes.inputStyle}/>
          <br/>
          <br/>

          <Button color="primary" onClick={handleAddress} sx={{marginBottom: "20px"}} type="button" variant="contained" endIcon={<SearchIcon/>}>Zoeken</Button>


          <Typography variant="h5">
            Gevonden adressen
          </Typography>
          <Typography mb="10px">
            Staat uw adres niet in de lijst, controleer dan de ingevulde postcode, huisnummer en eventueel huisnummertoevoeging en probeer opnieuw.
          </Typography>

          <div>
            {
              results !== undefined && results !== null && results.adressen !== undefined &&
                results.adressen.map((result) => (
                  <Grid sx={{marginBottom: "5px"}}>
                    <Button
                      onClick={() => {processAddress(result)}}
                      color="primary" type="button" variant="contained" endIcon={<ChevronRight/>}>
                      {result.straat + " " + result.huisnummer}
                      {result.huisnummertoevoeging !== null && result.huisnummertoevoeging}
                      {", " + result.postcode + " " + result.woonplaats}
                    </Button>
                  </Grid>
                ))
            }
          </div>

          <Grid
            sx={{marginTop: '30px'}}
            justifyContent="space-between" // Add it here :)
            container>
            <Grid item>
              <Link href="/moving/moving">
                <Button variant="text" startIcon={<ChevronLeft/>}> Ga terug</Button>
              </Link>
            </Grid>
           </Grid>

        </Grid>
      </Grid>

    </Layout>
  </>);
}


import Button from "@mui/material/Button";
import React, {ReactNode, useEffect, useState} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import {Tab, Tabs, Typography, Box, TextField, Avatar, Backdrop, CircularProgress, Stack} from "@mui/material";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import makeStyles from "@mui/styles/makeStyles";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useAppContext} from "../../components/context/state";
import SearchIcon from '@mui/icons-material/Search';
import {updateRequest} from "../../components/utility/RequestHandler";
import WarningIcon from '@mui/icons-material/Warning';
import { useUserContext } from "../../components/context/userContext";
import LoginScreen from "../../components/moving/loginScreen";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
  textAlign: {
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
      textAlign: "left"
    },
  },
}));

export default function Address() {

  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';

  const [results, setResults] = useState(null);

  const [postalCodeInputError, setPostalCodeInputError] = useState(false);
  const [postalCodeInputHelperText, setPostalCodeInputHelperText] = useState('');

  const [houseNumberInputError, setHouseNumberInputError] = useState(false);
  const [houseNumberInputHelperText, setHouseNumberInputHelperText] = useState('');

  const [errorMessageText, setErrorMessageText] = useState('');
  const [errorMessageTitle, setErrorMessageTitle] = useState('');
  const [icon, setIcon] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  let context = useAppContext();
  const router = useRouter();
  const userContext = useUserContext();

  useEffect(() => {
      if (userContext.user === undefined || userContext.user === null || userContext.user === 'undefined') {
        router.push("/moving");
      }
  }, []);

  const checkInputs = () => {
    let valid = true;

    let postalCodeInput = (document.getElementById('postalCode') as HTMLInputElement);
    let houseNumberInput = (document.getElementById('houseNumber') as HTMLInputElement);

    setPostalCodeInputError(false);
    setPostalCodeInputHelperText('');
    setHouseNumberInputError(false);
    setHouseNumberInputHelperText('');
    setIcon(false);
    setErrorMessageTitle("");
    setErrorMessageText("");

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

      handleToggle();

      let postalCode = (document.getElementById('postalCode') as HTMLInputElement).value;
      let houseNumber = (document.getElementById('houseNumber') as HTMLInputElement).value;
      let suffix = (document.getElementById('houseNumberSuffix') as HTMLInputElement).value;

      if (typeof postalCode === 'string') {
        postalCode = postalCode.toUpperCase();
      }

      fetch(context.apiUrl + "/gateways/as/adressen?postcode=" + postalCode + '&huisnummer=' + houseNumber + "&huisnummertoevoeging=" + suffix, {
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then((data) => {
          handleClose();
          setResults(data);
        });

    }
  }

  const classes = useStyles();

  const processAddress = (item) => {

    let codes = [1595, 3611, 1596, 3612];

    if (!codes.includes(item.woonplaatsNummer)) {
      setIcon(true)
      setErrorMessageTitle("Let op!")
      setErrorMessageText("Het nieuwe adres dat je opgeeft ligt helaas niet in een gemeente die deze service gebruikt. Geef de adreswijziging door op de website van de gemeente waar je naar toe verhuist.")
      return;
    }

    updateRequest(
      context,
      'adress',
      item.id
    )

    router.push('/moving/date');
  }
  return (<>
    <Layout title={title} description="waar kan ik deze description zien">

      {
        userContext.user == null
          ?
          <LoginScreen />
          :
          <Grid container spacing={3}>

            <Grid item sx={{width: '100%'}}>
              <Stepper currentStep={0}/>
            </Grid>

            <Grid sx={{marginTop: "20px", width: '100%'}} className={classes.textAlign} item>
              <Grid item>
                <Typography variant="h4">
                  Wat wordt je nieuwe adres?
                </Typography>
                <Typography mb="10px">
                  Vul je postcode, huisnummer en eventueel toevoeging in van het nieuwe adres.
                </Typography>
              </Grid>
              <Grid item style={{marginTop: 20, width: "100%"}}>
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

                <Button color="primary" onClick={handleAddress} sx={{marginBottom: "20px"}} type="button"
                        variant="contained"
                        endIcon={<SearchIcon/>}>Zoeken</Button>
              </Grid>
            </Grid>
            <Grid className={classes.textAlign} item>
              <Typography variant="h5">
                Gevonden adressen
              </Typography>
              <Typography mb="10px">
                Staat uw adres niet in de lijst, controleer dan de ingevulde postcode, huisnummer en eventueel
                huisnummertoevoeging en probeer opnieuw.
              </Typography>

              <div>
                {
                  results !== undefined && results !== null && results.adressen !== undefined &&
                  results.adressen.map((result) => (
                    <Grid sx={{marginBottom: "5px"}}>
                      <Button
                        onClick={() => {
                          processAddress(result)
                        }}
                        color="primary" type="button" variant="contained" endIcon={<ChevronRight/>}>
                        {result.straat + " " + result.huisnummer}
                        {result.huisnummertoevoeging !== null && result.huisnummertoevoeging}
                        {", " + result.postcode + " " + result.woonplaats}
                      </Button>
                    </Grid>
                  ))
                }
              </div>
            </Grid>
            <Grid>
              <Stack
                sx={{marginTop: '20px'}}
                direction="row"
                alignItems="center"
              >
                <div>{icon ? <WarningIcon color="warning" fontSize="large" sx={{marginRight: '40px'}}/> : null}</div>
                <div style={{textAlign: 'left'}}>
                  <Typography variant="h5">{errorMessageTitle}</Typography>
                  <div>{errorMessageText}</div>
                </div>
              </Stack>
            </Grid>
            <Grid
              sx={{marginTop: '30px', paddingLeft: '20px', paddingRight: '20px'}}
              justifyContent="space-between" // Add it here :)
              container>
              <Grid item>
                <Link href="/moving/moving">
                  <Button variant="text" startIcon={<ChevronLeft/>}> Ga terug</Button>
                </Link>
              </Grid>
            </Grid>

          </Grid>
      }
    </Layout>
  </>);
}


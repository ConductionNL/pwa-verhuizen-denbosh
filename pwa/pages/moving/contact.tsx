import Button from "@mui/material/Button";
import React, { ReactNode, useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import {Link, TextField, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";
import {useGet, useMutate} from "restful-react";
import {updateRequest} from "../../components/utility/RequestHandler";
import { useAppContext } from "../../components/context/state";
import { useUserContext } from "../../components/context/userContext";
import LoginScreen from "../../components/moving/loginScreen";

const useStyles = makeStyles((theme) => ({
  inputLength: {
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

function Index() {
  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';
  const router = useRouter();
  const context = useAppContext();
  let request = null;
  const userContext = useUserContext();

  useEffect(() => {
    if (userContext.user === undefined || userContext.user === null || userContext.user === 'undefined') {
      router.push("/moving");
    }
  }, []);

  const [emailInputError, setEmailInputError] = useState(false);
  const [emailInputHelperText, setEmailInputHelperText] = useState('');

  const [telephoneInputError, setTelephoneInputError] = useState(false);
  const [telephoneInputHelperText, setTelephoneInputHelperText] = useState('');

  const checkInputs = () => {
    let valid = true;

    let emailInput = (document.getElementById('email') as HTMLInputElement);
    let telephoneInput = (document.getElementById('telephone') as HTMLInputElement);

    setEmailInputError(false);
    setEmailInputHelperText('');
    setTelephoneInputError(false);
    setTelephoneInputHelperText('');

    if (emailInput.value.length == 0 && telephoneInput.value.length == 0) {
      setEmailInputError(true);
      setEmailInputHelperText('Vul of een e-mailadres in of een telefoonnummer');
      setTelephoneInputError(true);
      valid = false;
    }

    if (emailInput.value.length !== 0 || telephoneInput.value.length !== 0) {
      if (emailInput.value.length > 0) {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(String(emailInput.value).toLowerCase()) == false) {
          setEmailInputError(true);
          setEmailInputHelperText('Vul een geldig e-mailadres in');
          valid = false;
        }
      }

      if (telephoneInput.value.length > 0) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (re.test(String(telephoneInput.value).toLowerCase()) == false) {
          setTelephoneInputError(true);
          setTelephoneInputHelperText('Vul een geldig telefoonnummer in');
          valid = false;
        }
      }
    }


    return valid;
  }

  const handleContact = (event) => {
    event.preventDefault();

    let valid = checkInputs();

    if (!valid) {
      return;
    }

    let emailInput = (document.getElementById('email') as HTMLInputElement);
    let telephoneInput = (document.getElementById('telephone') as HTMLInputElement);

    let email;
    let telephone;

    if (emailInput.value.length == 0) {
      email = "";
    } else {
      email = emailInput.value;
    }

    if (telephoneInput.value.length == 0) {
      telephone = "";
    } else {
      telephone = telephoneInput.value;
    }

    updateRequest(context, 'email', email, {context: context, key: 'tel', value: telephone});

    router.push("/moving/check", undefined, { shallow: true })
  }

  const classes = useStyles();

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      {
        userContext.user == null
          ?
          <LoginScreen />
          :
          <Grid container spacing={3}>

            <Grid item sx={{width: '100%'}}>
              <Stepper currentStep={3}/>
            </Grid>

            <Grid sx={{marginTop: "20px", width: '100%'}} className={classes.textAlign} item>
              <Grid>
                <Typography variant="h4">
                  Hoe kunnen we je bereiken?
                </Typography>
                <Typography sx={{marginBottom: '10px'}}>
                  Vul je emailadres en/of je telefoonnummer in.
                </Typography>
              </Grid>
              <Grid item sx={{marginTop: '20px', width: "100%"}}>
                <form onSubmit={handleContact}>
                  <Grid item>
                    <TextField
                      className={classes.inputLength}
                      error={emailInputError}
                      helperText={emailInputHelperText}
                      id="email"
                      label="Email"
                      type="text"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sx={{marginTop: '10px', marginBottom: '20px'}}>
                    <TextField
                      className={classes.inputLength}
                      error={telephoneInputError}
                      helperText={telephoneInputHelperText}
                      id="telephone"
                      label="Telefoonnummer"
                      type="text"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    justifyContent="space-between" // Add it here :)
                    container>
                    <Grid item>
                      <Link href="/moving/coMovers">
                        <Button variant="text" startIcon={<ChevronLeft />}> Ga terug</Button>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button color="primary" type="submit" variant="contained" endIcon={<ChevronRight/>}>Ga verder</Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
      }

    </Layout>
  </>;
}

export default Index

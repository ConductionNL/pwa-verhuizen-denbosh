import Button from "@mui/material/Button";
import React, {useState} from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import {Link, TextField, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";
import {useGet, useMutate} from "restful-react";

const useStyles = makeStyles((theme) => ({
  inputLength: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
}));

function Index() {
  const title = 'Controle';
  const router = useRouter();
  var request = null;

  // const id = getIdFromStorage..
  const id = 'new';

  if (id != 'new') {
    request = useGet({
      path: "/requests" + id
    });
  }

  const {mutate: post} = useMutate({
    verb: "POST",
    path: `/requests/` + id,
  });

  const save = () => {
    let emailInput = document.getElementById('email');
    let telephoneInput = document.getElementById('telephone');

    request.properties.contactgegevens = {
      email: emailInput.value,
      telefoonnummer: telephoneInput.value
    };

    post(request).then(() => {updateSession(request.id)});
  }

  const updateSession = (id) => {
    // Set id in session
  }


  const [emailInputError, setEmailInputError] = useState(false);
  const [emailInputHelperText, setEmailInputHelperText] = useState('');

  const [telephoneInputError, setTelephoneInputError] = useState(false);
  const [telephoneInputHelperText, setTelephoneInputHelperText] = useState('');

  const checkInputs = () => {
    let valid = true;

    let emailInput = document.getElementById('email');
    let telephoneInput = document.getElementById('telephone');

    setEmailInputError(false);
    setEmailInputHelperText('');
    setTelephoneInputError(false);
    setTelephoneInputHelperText('');

    if (emailInput.value.length == 0 && telephoneInput.value.length == 0) {
      setEmailInputError(true);
      setEmailInputHelperText('Vul een geldig e-mailadres in');
      setTelephoneInputError(true);
      setTelephoneInputHelperText('Vul een geldig telefoonnummer in');
      valid = false;
    }

    if (emailInput.value.length > 0) {
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (re.test(String(emailInput.value).toLowerCase()) == false) {
        setEmailInputError(true);
        setEmailInputHelperText('Vul een geldig e-mailadres in');
        valid = false;
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
    // Session set address
    save()

    router.push("/moving/check", undefined, { shallow: true })
  }

  const classes = useStyles();

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>

        <Stepper currentStep={3}/>

        <Grid item sm={12}>
          <Typography variant="h4">
            Hoe kunnen we je bereiken?
          </Typography>
          <Typography mb="10px">
            Vul je emailadres en/of je telefoonnummer in.
          </Typography>

          <form onSubmit={handleContact}>
            <TextField
              className={classes.inputLength}
              error={emailInputError}
              helperText={emailInputHelperText}
              id="email"
              label="Email"
              type="email"
              variant="outlined"
            />
            <br/>
            <br/>
            <TextField
              className={classes.inputLength}
              error={telephoneInputError}
              helperText={telephoneInputHelperText}
              id="telephone"
              label="Telefoonnummer"
              type="text"
              variant="outlined"
            />
            <br/>
            <br/>

            <Grid
              justifyContent="space-between" // Add it here :)
              container>
              <Grid item>
                <Link href="/moving/coMovers">
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

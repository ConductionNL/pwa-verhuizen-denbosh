import Button from "@material-ui/core/Button";
import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, TextField, Link} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import check from "./check";
import SendIcon from "@material-ui/icons/Send";

function Index() {
  const title = 'Controle';
  const router = useRouter();

  const checkInputs = () => {
    //gaat alles goed?
    let valid = true;

    //alle inputs ophalen
    let emailInput = document.getElementById('email');

    console.log(emailInput);

    //bij alle inputs error property weghalen
    emailInput.removeAttribute('error');

    //check of inputs valid zijn
    if (emailInput.value.length == 0) {
      //hier moeten we zorgen dat de error getoond word
      emailInput.setAttribute('helperText', 'test');
      emailInput.setAttribute('error', 'true');
      valid = false;
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

    router.push("/moving/check")
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Stepper currentStep={3}/>

      <Grid item sm={12}>
        <PageHeader title={title}/>
        <br/>
        <h5>Hoe kunnen we je bereiken?</h5>
        <p>Vul je emailadres en/of je telefoonnummer in.</p>

        <form onSubmit={handleContact}>
          <Grid item md={12}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              type="email"
              variant="outlined"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              margin="normal"
              fullWidth
              id="telephone"
              label="Telephone"
              type="text"
              variant="outlined"
            />
          </Grid>
          <br/>
          <Grid
            justify="space-between" // Add it here :)
            container>
            <Grid item>
              <Link href="/moving/coMovers">
                <Button variant="contained"> Ga terug</Button>
              </Link>
            </Grid>
            <Grid item>
                <Button color="primary" type="submit" variant="contained">Volgende</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>

    </Layout>
  </>
}

export default Index

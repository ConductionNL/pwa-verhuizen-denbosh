import Button from "@material-ui/core/Button";
import React, {ReactNode} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useRouter} from "next/router";
import CheckboxList from "../../components/moving/list";
import Stepper from "../../components/moving/stepper";

function Index() {
  const title = 'Contactgegevens';
  const router = useRouter();

  const handleContact = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/contact")
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Stepper currentStep={3}/>

        <Grid item sm={12} >
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
            <Grid
              justify="space-between" // Add it here :)
              container>
              <Grid item>
                <Button variant="contained"> Ga terug</Button>
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

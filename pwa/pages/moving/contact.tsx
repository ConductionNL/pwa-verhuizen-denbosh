import Button from "@material-ui/core/Button";
import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/common/pageheader";
import {TextField} from "@material-ui/core";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";

function Index() {
  const title = 'Verhuizen';
  const router = useRouter();

  const handleContact = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/contact")
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Stepper currentStep={3} />
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
      </Grid>

    </Layout>
  </>
}

export default Index

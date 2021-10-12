import Button from "@material-ui/core/Button";
import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/common/pageheader";
import {Link, TextField} from "@material-ui/core";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import CheckList from "../../components/moving/listCheck";
import SendIcon from "@material-ui/icons/Send";

function Index() {
  const title = 'Controle';
  const router = useRouter();

  const handleContact = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/contact")
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Stepper currentStep={4}/>
        <Grid item sm={12}>
          <PageHeader title={title}/>
          <br/>
          <h5>Controleer je gegevens</h5>

          <form onSubmit={handleContact}>
            <CheckList/>
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
                <Button variant="contained" endIcon={<SendIcon/>}>
                  Versturen
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

    </Layout>
  </>
}

export default Index

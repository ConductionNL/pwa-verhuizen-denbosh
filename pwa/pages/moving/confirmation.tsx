import Button from "@mui/material/Button";
import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import {Link, TextField} from "@mui/material";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import CheckList from "../../components/moving/listCheck";
import SendIcon from "@mui/icons-material/Send";

function Index() {
  const title = 'Bevestiging';
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

          <h4>Succesvol verzonden!</h4>
          <h5>Er is iets fout gegaan.. probeer het opnieuw</h5>
          <br/>
          <Button variant="contained" color="primary" endIcon={<SendIcon/>}>
            Versturen
          </Button>
          <br/>
          <br/>
          <Grid
            justifyContent="space-between" // Add it here :)
            container>
            <Grid item>
              <Link href="/moving/check">
                <Button variant="contained"> Ga terug</Button>
              </Link>
            </Grid>
            <Grid item>
              {/*<Button type="submit" variant="contained" color="primary" endIcon={<SendIcon/>}>*/}
              {/*  Versturen*/}
              {/*</Button>*/}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Layout>
  </>;
}

export default Index

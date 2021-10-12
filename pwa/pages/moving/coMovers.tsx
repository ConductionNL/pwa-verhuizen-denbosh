import Button from "@mui/material/Button";
import React from "react";
import {Link} from "@mui/material";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import {useRouter} from "next/router";
import CheckboxList from "../../components/moving/listCoMovers";
import Stepper from "../../components/moving/stepper";

function Index() {
  const title = 'Meeverhuizers';
  const router = useRouter();

  const handleCoMovers = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/contact")
  }

  return <>
  <Layout title={title} description="waar kan ik deze description zien">
    <Grid container spacing={3}>
      <Stepper currentStep={2}/>
      <Grid item sm={12}>
        <PageHeader title={title}/>
        <br/>
        <h5>Wie gaat er verhuizen?</h5>
        <p>Onderstaande personen kunnen door jou verhuist worden.</p>

        <form onSubmit={handleCoMovers}>
          <CheckboxList/>

          <br/>
          <Grid
            justifyContent="space-between" // Add it here :)
            container>
            <Grid item>
              <Link href={'/moving/date'}>
                <Button variant="contained"> Ga terug</Button>
              </Link>
            </Grid>
            <Grid item>
              <Button color="primary" type="submit" variant="contained">Volgende</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  </Layout>
</>;
}

export default Index

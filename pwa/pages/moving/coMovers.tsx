import Button from "@material-ui/core/Button";
import React, {ReactNode} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {useRouter} from "next/router";
import CheckboxList from "../../components/moving/list";
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

      <Stepper currentStep={2}/>
      <Grid item sm={12}>
        <PageHeader title={title}/>
        <br/>
        <h5>Wie gaat er verhuizen?</h5>
        <p>Onderstaande personen kunnen door jou verhuist worden.</p>

        <form onSubmit={handleCoMovers}>
          <CheckboxList/>

          <Grid
            justify="space-between" // Add it here :)
            container>
            <Grid item>
              <Link href="/moving/date">
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

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

function Index() {
  const title = 'Verhuizen';
  const router = useRouter();

  const handleCoMovers = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/contact")
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            Willen we deze action menu?
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <br/>
          <h5>Wie gaat er verhuizen?</h5>
          <p>Onderstaande personen kunnen door jou verhuist worden.</p>

          <form onSubmit={handleCoMovers}>
            <CheckboxList />

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

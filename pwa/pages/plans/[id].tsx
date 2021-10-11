import {useRouter} from 'next/router'
import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'

import Header from "../../components/common/header";
import Container from "@material-ui/core/Container";
import Footer from "../../components/common/footer";
import Typography from '@material-ui/core/Typography';
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";

const plans = [
  {
    id: 1,
    name: "Plan 1",
    description: "Omschrijving van plan 1"
  },
  {
    id: 2,
    name: "Plan 2",
    description: "Omschrijving van plan 2"
  }];

const Plan = () => {
  const router = useRouter()
  const query = router.query
  const item = plans.filter(function (item) {
    return item.id == parseInt(query.id as string, 10);
  });
  if (typeof item[0] != "undefined") {
    const title = item[0]['name']

    return <>
      <Layout title={title} description="waar kan ik deze description zien">

        <Grid container>
          <Hidden smDown>
            <Grid item md={3}>
              <ActionMenu/>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={9}>
            <PageHeader title={title}/>

            <Box paddingTop={2} paddingBottom={2}>
              <p>{"Name: " + item[0]['name']}</p>
              <p>{item[0]['description']}</p>
            </Box>

          </Grid>
        </Grid>
      </Layout>
    </>
  } else {
    return <></>
  }
}

export default Plan

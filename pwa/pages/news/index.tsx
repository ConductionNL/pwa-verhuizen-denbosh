import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import NewsCard from "../../components/news/card";

function Index() {

  const title = 'Nieuws';

  const news = [
    {
      id: 1,
      title: 'Woord van de dag',
      name: 'Nieuws',
      description: 'Lorem ipsum'
    },
    {
      id: 2,
      title: 'Woord van de dag',
      name: 'Nieuws 2',
      description: 'Lorem ipsum'
    },
    {
      id: 3,
      title: 'Woord van de dag',
      name: 'Nieuws 3',
      description: 'Lorem ipsum'
    }
  ]

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>Omschrijving van nieuws</p>
          </Box>

          <NewsCard news={news}/>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index

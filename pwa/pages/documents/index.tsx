import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import PageHeader from "../../components/common/pageheader";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import ActionMenu from "../../components/common/actionmenu";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DocumentsTable from "../../components/documents/table";
import QuestionsAccordion from "../../components/messages/questionsAccordion";

import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  gridMarginTop: {
    marginTop: '20px',
  }
}));

function Index() {
  const classes = useStyles();

  const title = 'Documenten';

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

          <Box paddingTop={3} paddingBottom={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card className={classes.root}>
                  <CardContent>
                    <DocumentsTable/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid className={classes.gridMarginTop} container spacing={2}>
              <Grid item xs={12}>
                <QuestionsAccordion/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index

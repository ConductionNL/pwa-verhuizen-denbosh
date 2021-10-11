import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import MessagesCard from "../../components/messages/card";
import MessagesTable from "../../components/messages/table";
import CollapsibleTable from "../../components/messages/collapsibleTable";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import QuestionsAccordion from "../../components/messages/questionsAccordion";

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
  const title = 'Mijn berichten';

  return <>
  <Layout title={title} description="waar kan ik deze description zien">
    <Grid container>
      <Hidden smDown>
        <Grid item md={3}>
          <ActionMenu/>
        </Grid>
      </Hidden>
      <Grid item sm={12} md={9}>
        <PageHeader title={title}/>

        <Box paddingTop={3} paddingBottom={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card className={classes.root}>
                <CardContent>
                  <MessagesTable/>
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

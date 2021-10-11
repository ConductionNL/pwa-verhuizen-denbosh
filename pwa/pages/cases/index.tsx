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
import CasesTable from "../../components/cases/table";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MessagesTable from "../../components/messages/table";
import CollapsibleTable from "../../components/messages/collapsibleTable";
import {lighten, makeStyles} from "@material-ui/core/styles";
import QuestionsAccordion from "../../components/messages/questionsAccordion";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TablePagination from "@material-ui/core/TablePagination";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const useTabPanelStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CasesTableTabs = (props) => {
  const tabClasses = useTabPanelStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={tabClasses.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Overzicht" />
        <Tab label="Afgehandeld" />
      </Tabs>
    </div>
  );
}

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
  const title = 'Lopende zaken';
  const zakenHref = '/products/' + Math.floor(Math.random() * 10);

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
                  <div className={classes.root}>
                    <CasesTableTabs/>
                    <CasesTable/>
                  </div>
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

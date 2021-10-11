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
import {useGet, Poll, Get} from "restful-react";
import PersonalInfo from "../../components/data/personal_info";
import AddressInfo from "../../components/data/address_info";
import FamilyInfo from "../../components/data/family_info";
import {Paper, Tab, Tabs} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Data = () => {
  const title = "Mijn Persoonsgegevens"
  const router = useRouter()
  const {id} = router.query

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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

          <Box paddingTop={3} paddingBottom={2}>
            <Paper>
              <Grid container>
                <Grid item xs={12}>
                  <Tabs
                    orientation="horizontal"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                  >
                    <Tab label="Basisgegevens" {...a11yProps(0)} />
                    <Tab label="Familie" {...a11yProps(1)} />
                  </Tabs>
                </Grid>
                <Grid item xs={9}>
                  <TabPanel value={value} index={0}>
                    <Box paddingBottom={1}>
                      <Box paddingTop={1} paddingBottom={4}>
                        <h4>Identiteitsgegevens</h4>
                        <PersonalInfo id={id}/>
                      </Box>
                      <Box>
                        <h4>Adresgegevens</h4>
                        <AddressInfo id={id}/>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <FamilyInfo id={id}/>
                  </TabPanel>
                </Grid>
              </Grid>
            </Paper>
          </Box>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Data

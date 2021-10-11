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
import {useGet, Poll, Get, RestfulProvider} from "restful-react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {AppBar} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CasesTable from "../../components/cases/table";
import OverviewInfo from "../../components/cases/overview_info";
import ContactPerson from "../../components/cases/contact_person";
import TasksTable from "../../components/tasks/table";
import DocumentsTable from "../../components/documents/table";
import ClaimsTable from "../../components/claims/table";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box paddingTop={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const Product = () => {

  let title = ""
  const router = useRouter()
  const {id} = router.query

  const { data: zaak } = useGet({
    path: "http://localhost/api/gateways/zaken/zaken/" + id,
  });

  console.log(zaak);

  if (zaak !== null) {
    title = zaak.identificatie
  }

  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minWidth: '100%',
        backgroundColor: theme.palette.background.paper,
      },
      contact_card: {
        marginBottom: '10px',
        backgroundColor: '#F5F5F5'
      },
      card_content: {
        marginBottom: '10px',
      }
    }),
  );

  const classes = useStyles();

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
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Overzicht" value="one" {...a11yProps('one')} />
                  <Tab label="Taken" value="two" {...a11yProps('two')} />
                  <Tab label="Documenten" value="three" {...a11yProps('three')} />
                  <Tab label="Betrokkenen" value="four" {...a11yProps('four')} />
                  <Tab label="Vraag en antwoord" value="five" {...a11yProps('five')} />
                </Tabs>

              </AppBar>
              <TabPanel value={value} index="one">
                <Card className={classes.contact_card}>
                  <CardContent className={classes.card_content}>
                    <ContactPerson zaak={zaak} />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className={classes.card_content}>
                    <OverviewInfo zaak={zaak} />
                  </CardContent>
                </Card>
              </TabPanel>
              <TabPanel value={value} index="two">
                <Card className={classes.root}>
                  <CardContent>
                    <TasksTable/>
                  </CardContent>
                </Card>
              </TabPanel>
              <TabPanel value={value} index="three">
                <div style={{marginBottom: '10px'}}>
                  <DocumentsTable/>
                </div>
                  <ClaimsTable/>
              </TabPanel>
              <TabPanel value={value} index="four">
                Betrokkenen
              </TabPanel>
            </Box>

          </Grid>
        </Grid>
      </Layout>
  </>
}

export default Product

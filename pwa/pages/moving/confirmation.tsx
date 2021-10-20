import Button from "@mui/material/Button";
import React, { ReactNode, useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import {Link, TextField, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import CheckList from "../../components/moving/listCheck";
import SendIcon from "@mui/icons-material/Send";
import {useGet} from "restful-react";
import makeStyles from "@mui/styles/makeStyles";
import { useUserContext } from "../../components/context/userContext";
import LoginScreen from "../../components/moving/loginScreen";

const useStyles = makeStyles((theme) => ({
  listStyle: {
    [theme.breakpoints.down('md')]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"    },
  },
  textAlign: {
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
      textAlign: "left"
    },
  },
}));

function Index() {
  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';
  const router = useRouter();
  var request = null;
  const classes = useStyles();
  const userContext = useUserContext();

  useEffect(() => {
    if (userContext.user === undefined || userContext.user === null || userContext.user === 'undefined') {
      router.push("/moving");
    }
  }, []);

  // const id = getIdFromStorage..
  const id = 'new';

  if (id != 'new') {
    request = useGet({
      path: "/requests" + id
    });
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      {
        userContext.user == null
          ?
          <LoginScreen />
          :
          <Grid container spacing={3}>

            <Grid item sx={{width: '100%'}}>
              <Stepper currentStep={5}/>
            </Grid>

            <Grid sx={{marginTop: "20px", width: '100%'}} className={classes.textAlign} item>
              <Grid item >
                <Typography variant="h4">
                  Je verhuizing is aangevraagd
                </Typography>
                <Typography mb="10px">
                  De volgende gegevens zijn succesvol verzonden naar de gemeente.
                </Typography>
              </Grid>
              <Grid item className={classes.listStyle}>
                <CheckList/>
              </Grid>
            </Grid>
          </Grid>
      }

    </Layout>
  </>;
}

export default Index

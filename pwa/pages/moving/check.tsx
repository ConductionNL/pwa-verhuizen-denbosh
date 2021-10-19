import Button from "@mui/material/Button";
import React, { ReactNode, useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import {Link, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import CheckList from "../../components/moving/listCheck";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";
import {useGet, useMutate} from "restful-react";
import { submitRequest } from "../../components/utility/RequestHandler";
import { useAppContext } from "../../components/context/state";
import { useUserContext } from "../../components/context/userContext";
import LoginScreen from "../../components/moving/loginScreen";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: '400px',
  },
  listStyle: {
    [theme.breakpoints.down('md')]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
  },
}));

function Index() {
  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';
  const router = useRouter();
  const context = useAppContext();
  let request = null;
  const classes = useStyles();
  const userContext = useUserContext();

  useEffect(() => {
    if (userContext.user === undefined || userContext.user === null || userContext.user === 'undefined') {
      router.push("/moving");
    }
  }, []);


  const handleContact = (event) => {
    event.preventDefault();

    submitRequest(context);

    router.push("/moving/confirmation", undefined, {shallow: true})
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      {
        userContext.user == null
          ?
          <LoginScreen />
          :
          <Grid container spacing={3}>
            <Stepper currentStep={4}/>
            <Grid item sm={12} xs={12}>
              <Typography variant="h4">
                Controleer je gegevens
              </Typography>
            </Grid>
            <Grid item sm={12} xs={12} md={12}>
              <form onSubmit={handleContact}>
                <div className={classes.listStyle}>
                  <CheckList/>
                </div>
                <br/>
                <Grid
                  justifyContent="space-between" // Add it here :)
                  container>
                  <Grid item>
                    <Link href="/moving/contact">
                      <Button variant="text" startIcon={<ChevronLeft/>}> Ga terug</Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Button type="submit" variant="contained" color="primary" endIcon={<ChevronRight/>}>
                      Nu verzenden
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
      }

    </Layout>
  </>;
}

export default Index

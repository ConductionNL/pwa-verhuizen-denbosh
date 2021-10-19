import Button from "@mui/material/Button";
import React, { ReactNode, useEffect, useState } from "react";
import {Link, Typography} from "@mui/material";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import {useRouter} from "next/router";
import CheckboxList from "../../components/moving/listCoMovers";
import Stepper from "../../components/moving/stepper";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useGet, useMutate} from "restful-react";
import makeStyles from "@mui/styles/makeStyles";
import { useUserContext } from "../../components/context/userContext";
import LoginScreen from "../../components/moving/loginScreen";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
  listStyle: {
    textAlign: "center",
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

  const {mutate: post} = useMutate({
    verb: "POST",
    path: `/requests/` + id,
  });

  const save = () => {
    request.properties.meeverhuizers = [];
    post(request).then(() => {updateSession(request.id)});
  }

  const updateSession = (id) => {
    // Set id in session
  }

  const handleCoMovers = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/contact", undefined, {shallow: true})
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      {
        userContext.user == null
          ?
          <LoginScreen />
          :
          <Grid container spacing={3}>
            <Stepper currentStep={2}/>
            <Grid item sm={12}>
              <Typography variant="h4">
                Wie gaat er verhuizen?
              </Typography>
              <Typography mb="10px">
                Onderstaande personen kunnen door jou verhuist worden.
              </Typography>
            </Grid>
            <Grid item sm={12} xs={12} md={12}>
              <form onSubmit={handleCoMovers}>
                <div className={classes.listStyle}>
                  <CheckboxList/>
                </div>
                <br/>
                <Grid
                  justifyContent="space-between" // Add it here :)
                  container>
                  <Grid item>
                    <Link href={'/moving/date'}>
                      <Button variant="text" startIcon={<ChevronLeft/>}> Ga terug</Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Button color="primary" type="submit" variant="contained" endIcon={<ChevronRight/>}>Ga verder</Button>
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

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
import {updateRequest} from "../../components/utility/RequestHandler";
import {useAppContext} from "../../components/context/state";

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
  const context = useAppContext();

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

    let values = [];

    for(let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        values.push(event.target[i].value);
      }
    }

    updateRequest(
      context,
      'wie',
      values.toString(),
      {
        context: context,
        key: 'wie_bsn',
        value: values.toString()
      }
    )

    router.push("/moving/contact", undefined, {shallow: true})
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      {
        userContext.user == null
          ?
          <LoginScreen />
          :
          <Grid container spacing={2}>

            <Grid item sx={{width: '100%'}}>
              <Stepper currentStep={2}/>
            </Grid>

            <Grid sx={{marginTop: "20px", width: '100%'}} className={classes.textAlign} item>
              <Grid item>
                <Typography variant="h4">
                  Wie gaat er verhuizen?
                </Typography>
                <Typography mb="10px">
                  Onderstaande personen kunnen door jou verhuist worden.
                </Typography>
              </Grid>
              <Grid item>
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

          </Grid>
      }
    </Layout>
  </>;
}

export default Index

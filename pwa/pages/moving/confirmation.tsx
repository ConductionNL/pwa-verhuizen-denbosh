import Button from "@mui/material/Button";
import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import {Link, TextField, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import CheckList from "../../components/moving/listCheck";
import SendIcon from "@mui/icons-material/Send";
import {useGet} from "restful-react";

function Index() {
  const title = 'Bevestiging';
  const router = useRouter();
  var request = null;

  // const id = getIdFromStorage..
  const id = 'new';

  if (id != 'new') {
    request = useGet({
      path: "/requests" + id
    });
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Stepper currentStep={5}/>
        <Grid item sm={12}>
          {
            request != null && request.status == 'submitted' ?
              <Typography variant="h4">
                Je verhuizing is aangevraagd
              </Typography> :
              <Typography variant="h4">
                Er is iets misgegeaan probeer het opnieuw
              </Typography>
          }
          {
            request != null && request.status == 'submitted' &&
            <Typography mb="10px">
              De volgende gegevens zijn succesvol verzonden naar de gemeente.
            </Typography>
          }
          <CheckList/>
        </Grid>
      </Grid>

    </Layout>
  </>;
}

export default Index

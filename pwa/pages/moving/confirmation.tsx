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

function Index() {
  const title = 'Bevestiging';
  const router = useRouter();

  const handleContact = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/contact")
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Stepper currentStep={5}/>
        <Grid item sm={12}>
          <Typography variant="h4">
            Je verhuizing is aangevraagd
          </Typography>
          <Typography mb="10px">
            De volgende gegevens zijn succesvol verzonden naar de gemeente.
          </Typography>
          <CheckList/>
        </Grid>
      </Grid>

    </Layout>
  </>;
}

export default Index

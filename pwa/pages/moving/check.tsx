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
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useGet, useMutate} from "restful-react";
import {useAppContext} from "../../components/context/state";
import {submitRequest} from "../../components/utility/RequestHandler";

function Index() {
  const title = 'Controle';
  const router = useRouter();
  const context = useAppContext();
  let request = null;


  const handleContact = (event) => {
    event.preventDefault();

    submitRequest(context);

    router.push("/moving/confirmation", undefined, { shallow: true })
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Stepper currentStep={4}/>
        <Grid item sm={12}>
          <Typography variant="h4">
            Controleer je gegevens
          </Typography>

          <form onSubmit={handleContact}>
            <CheckList/>
            <br/>
            <Grid
              justifyContent="space-between" // Add it here :)
              container>
              <Grid item>
                <Link href="/moving/contact">
                  <Button variant="text" startIcon={<ChevronLeft />}> Ga terug</Button>
                </Link>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary" endIcon={<ChevronRight />}>
                  Nu verzenden
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

    </Layout>
  </>;
}

export default Index

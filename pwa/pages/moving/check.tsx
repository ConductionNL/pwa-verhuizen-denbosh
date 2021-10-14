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

function Index() {
  const title = 'Controle';
  const router = useRouter();
  var request = null;

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
    post(request).then(() => {updateSession(request.id)});
  }

  const updateSession = (id) => {
    // Set id in session
  }

  const handleContact = (event) => {
    event.preventDefault();

    // Session set address
    // save()

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

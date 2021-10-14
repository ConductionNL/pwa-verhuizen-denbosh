import Button from "@mui/material/Button";
import React from "react";
import {Link, Typography} from "@mui/material";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import {useRouter} from "next/router";
import CheckboxList from "../../components/moving/listCoMovers";
import Stepper from "../../components/moving/stepper";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
  boxStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}));

function Index() {
  const title = 'Meeverhuizers';
  const router = useRouter();
  const classes = useStyles();

  const handleCoMovers = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/contact", undefined, {shallow: true})
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container spacing={3}>
        <Stepper currentStep={2}/>
        <Grid item sm={12}>
          <Typography variant="h4">
            Wie gaat er verhuizen?
          </Typography>
          <Typography mb="10px">
            Onderstaande personen kunnen door jou verhuist worden.
          </Typography>

          <form onSubmit={handleCoMovers}>
            <div className={classes.boxStyle}>
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
    </Layout>
  </>;
}

export default Index

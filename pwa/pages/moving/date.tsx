import Button from "@material-ui/core/Button";
import React, {ReactNode} from "react";
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Index() {
  const classes = useStyles();
  const title = 'Verhuisdatum';
  const router = useRouter();

  const handleDate = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/coMovers")
  }

  const [date, setDate] = React.useState();
  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container spacing={3}>
      <Stepper currentStep={1} />

      <Grid item sm={12}>
        <PageHeader title={title}/>
        <br/>
        <h5>Wanneer ga je verhuizen?</h5>
        <p>Kies je verhuisdatum in de onderstaande kalender. De verhuisdatum mag maximaal 28 dagen in de toekomst
          liggen.</p>

          <form onSubmit={handleDate}>
            <TextField
              id="date"
              label="Verhuisdatum"
              type="date"
              defaultValue="2021-10-12"
              onChange={handleChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{marginBottom: 20}}
            />
            <span style={{marginBottom: 20}}><p>Verhuisdatum: {date}</p></span>

            <Grid
              justify="space-between" // Add it here :)
              container>
              <Grid item>
                <Link href={'/moving/address'}>
                  <Button variant="contained"> Ga terug</Button>
                </Link>
              </Grid>
              <Grid item>
                <Button color="primary" type="submit" variant="contained">Volgende</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index

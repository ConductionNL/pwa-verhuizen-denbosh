import Button from "@mui/material/Button";
import React, {ReactNode} from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import Link from "next/link";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

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
  calendarAlign: {
    margin: 'auto !important',
    [theme.breakpoints.up('md')]: {
      margin: '0 !important',
    },
  },
}));

function Index() {
  const classes = useStyles();
  const title = 'Verhuisdatum';
  const router = useRouter();

  const maxDateOfMoveObject = new Date();
  maxDateOfMoveObject.setDate(maxDateOfMoveObject.getDate() + 50);
  // let maxDateOfMove = maxDateOfMoveObject.toISOString().split('T')[0];

  const handleDate = (event) => {
    event.preventDefault();

    // Session set address
    let dateInput = document.getElementById('dateInput');
    if (dateInput.value == null || dateInput.value == '') {
      alert("Vul een correcte datum in")
      return;
    }


    router.push("/moving/coMovers", undefined, {shallow: true})
  }

  const [date, setValue] = React.useState(new Date());

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container spacing={3}>
        <Stepper currentStep={1}/>

        <Grid item sm={12}>
          <Typography variant="h4">
            Wanneer ga je verhuizen?
          </Typography>
          <Typography mb="10px">
            Kies je verhuisdatum in de onderstaande kalender. De verhuisdatum mag maximaal 28 dagen in de toekomst
            liggen.
          </Typography>

          <form onSubmit={handleDate}>
            {/*<LocalizationProvider dateAdapter={AdapterDateFns}>*/}
            {/*  <StaticDatePicker*/}
            {/*    className={classes.calendarAlign}*/}
            {/*    displayStaticWrapperAs="desktop"*/}
            {/*    openTo="day"*/}
            {/*    value={value}*/}
            {/*    onChange={(newValue) => {*/}
            {/*      setValue(newValue);*/}
            {/*    }}*/}
            {/*    renderInput={(params) => <TextField {...params} />}*/}
            {/*  />*/}
            {/*</LocalizationProvider>*/}

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                minDate={new Date()}
                maxDate={maxDateOfMoveObject}
                displayStaticWrapperAs="desktop"
                openTo="day"
                value={date}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <span style={{marginBottom: 20}}><p>Verhuisdatum: {date.toISOString().split('T')[0]}</p></span>
            <input type="hidden" id="dateInput" value={date.toISOString().split('T')[0]} />

            <br/>
            <Grid
              justifyContent="space-between" // Add it here :)
              container>
              <Grid item>
                <Link href="/moving/address">
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

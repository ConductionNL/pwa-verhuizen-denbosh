import Button from "@mui/material/Button";
import React, { ReactNode, useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, Stack} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import Link from "next/link";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import {useGet, useMutate} from "restful-react";
import {updateRequest} from "../../components/utility/RequestHandler";
import { useAppContext } from "../../components/context/state";
import { useUserContext } from "../../components/context/userContext";
import LoginScreen from "../../components/moving/loginScreen";
import WarningIcon from "@mui/icons-material/Warning";

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
    [theme.breakpoints.up('md')]: {
      marginRight: '100%',
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
  const classes = useStyles();
  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';
  const router = useRouter();
  let request = null;
  let context = useAppContext();
  const userContext = useUserContext();

  const handleDate = (event) => {
    event.preventDefault();

    let pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 5);

    if (date < pastDate) {
      let newDate = new Date();
      updateRequest(context, 'datum', newDate.toISOString().split('T')[0]);
    } else {
      updateRequest(context, 'datum', date.toISOString().split('T')[0]);
    }

    router.push("/moving/coMovers", undefined, {shallow: true});
  }

  const maxDateOfMoveObject = new Date();
  maxDateOfMoveObject.setDate(maxDateOfMoveObject.getDate() + 28);
  // let maxDateOfMove = maxDateOfMoveObject.toISOString().split('T')[0];

  const [date, setValue] = React.useState(new Date());

  const [errorMessageText, setErrorMessageText] = useState('');
  const [errorMessageTitle, setErrorMessageTitle] = useState('');
  const [icon, setIcon] = useState(false);

  return <>
  <Layout title={title} description="waar kan ik deze description zien">
    {
      userContext.user == null
        ?
        <LoginScreen />
        :
        <Grid container spacing={3}>
          <Grid item sx={{width: '100%'}}>
            <Stepper currentStep={1}/>
          </Grid>


          <Grid sx={{marginTop: "20px", width: '100%'}} className={classes.textAlign} item>
            <Grid item>
              <Typography variant="h4">
                Wanneer ga je verhuizen?
              </Typography>
              <Typography mb="10px">
                Kies je verhuisdatum in de onderstaande kalender. De verhuisdatum mag maximaal 28 dagen in de toekomst
                liggen.
              </Typography>
            </Grid>
            <Grid item style={{marginTop: 20, width: "100%"}}>
              <form onSubmit={handleDate}>
                <Grid item className={classes.calendarAlign}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                      maxDate={maxDateOfMoveObject}
                      displayStaticWrapperAs="desktop"
                      openTo="day"
                      value={date}
                      onChange={(newValue) => {
                        let date = new Date();
                        date.setDate(date.getDate() - 5);
                        setIcon(false);
                        setErrorMessageTitle("");
                        setErrorMessageText("");
                        setValue(newValue);

                        if (newValue < date) {
                          setIcon(true);
                          setErrorMessageTitle("Let op!");
                          setErrorMessageText("Uw verhuizing was langer dan 5 dagen geleden. De gemeente zal uw verhuisdatum aanpassen naar de datum van vandaag.");
                        }
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>

                </Grid>
                <Grid item>
                  <span style={{marginBottom: 20}}><p>Verhuisdatum: {date.toISOString().split('T')[0]}</p></span>
                </Grid>
                <Grid>
                  <Stack
                    sx={{marginTop: '20px'}}
                    direction="row"
                    alignItems="center"
                  >
                    <div>{icon ? <WarningIcon color="warning" fontSize="large" sx={{marginRight: '40px'}}/> : null}</div>
                    <div style={{textAlign: 'left'}}>
                      <Typography variant="h5">{errorMessageTitle}</Typography>
                      <div>{errorMessageText}</div>
                    </div>
                  </Stack>
                </Grid>
                <Grid
                  sx={{marginTop: '30px'}}
                  justifyContent="space-between" // Add it here :)
                  container>
                  <Stack
                    sx={{width: '100%'}}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Link href="/moving/address">
                      <Button variant="text" startIcon={<ChevronLeft/>}> Ga terug</Button>
                    </Link>
                    <Button color="primary" type="submit" variant="contained" endIcon={<ChevronRight/>}>Ga verder</Button>
                  </Stack>
                </Grid>
              </form>
            </Grid>
          </Grid>

        </Grid>
    }
  </Layout>
</>
  ;
}

export default Index

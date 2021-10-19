import Button from "@mui/material/Button";
import React, { useEffect} from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import {Typography, Box, Avatar} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {ForwardRounded} from "@mui/icons-material";
import {createRequest} from "../../components/utility/RequestHandler";
import {useUserContext} from "../../components/context/userContext";
import {useGet} from "restful-react";
import { useAppContext } from "../../components/context/state";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LoginScreen from "../../components/moving/loginScreen";

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
  buttonAlign: {
    margin: 'auto !important',
    [theme.breakpoints.up('md')]: {
      margin: '0 !important',
    },
  },
  stepsStyle:
    {
      marginRight: 15,
    },
  boxStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: '0 !important',
    [theme.breakpoints.up('md')]: {
      display: "flex",
      alignItems: "left",
      justifyContent: "left",
      displayStaticWrapperAs: "mobile",
      margin: 'auto !important',
    },
  },
  titleStyle: {
    marginBottom: 20
  },
  listStyle: {
    [theme.breakpoints.down('md')]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"    },
  },
}));

function Index() {
  const classes = useStyles();
  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';
  const router = useRouter();
  const userContext = useUserContext();
  const context = useAppContext();

  const handleDate = (event) => {
    event.preventDefault();

    createRequest(userContext.user, context);
    router.push("/moving/address", undefined, {shallow: true})
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      {
        userContext.user == null
          ?
            <LoginScreen />
          :
          <Grid container spacing={3}>
            <Box sx={{ width: '100%', marginTop: '20px', textAlign: "center" }}>
              <Avatar sx={{ backgroundColor: "#001759", marginLeft: "auto", marginRight: "auto" }}>
                <LocalShippingIcon />
              </Avatar>
              <Typography mb={1} fontWeight="medium">
                Ik ga verhuizen
              </Typography>
            </Box>

            <Grid item sm={12} xs={12} md={12} className={classes.listStyle}>
              <Typography variant="h4" className={classes.titleStyle}>
                Deze stappen ga je doorlopen
              </Typography>
            </Grid>
            <Grid item sm={12} xs={12} md={12}>
              <Box className={classes.listStyle} sx={{p: 2, display: 'flex'}}>
                <Avatar className={classes.stepsStyle} sx={{ margin: 0, backgroundColor: "#ad9156"}}><ForwardRounded/></Avatar>
                <span>Geef je nieuwe adres op</span>
              </Box>
              <Box className={classes.listStyle} sx={{p: 2, display: 'flex'}}>
                <Avatar className={classes.stepsStyle} sx={{ margin: 0, backgroundColor: "#ad9156"}}><ForwardRounded/></Avatar>
                <span>Geef de datum op wanneer je gaat verhuis</span>
              </Box>
              <Box className={classes.listStyle} sx={{p: 2, display: 'flex'}}>
                <Avatar className={classes.stepsStyle} sx={{ margin: 0, backgroundColor: "#ad9156"}}><ForwardRounded/></Avatar>
                <span>Geef aan met wie je gaat verhuizen</span>
              </Box>
              <Box className={classes.listStyle} sx={{p: 2, display: 'flex'}}>
                <Avatar className={classes.stepsStyle} sx={{ margin: 0, backgroundColor: "#ad9156"}}><ForwardRounded/></Avatar>
                <span>Geef aan hoe we je kunnen bereiken</span>
              </Box>
            </Grid>
            <br/>
            <Grid item sm={12} xs={12} md={12}>
              <form onSubmit={handleDate} style={{textAlign: "center"}}>
                <Grid justifyContent="space-between" // Add it here :)
                      container>
                  <Grid item sm={12} xs={12} md={12}>
                    <Button color="primary" type="submit" variant="contained" endIcon={<ChevronRight/>}>Starten</Button>
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

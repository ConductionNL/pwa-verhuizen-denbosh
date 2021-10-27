import Button from "@mui/material/Button";
import React, { useEffect} from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import {Typography, Box, Avatar, Stack} from "@mui/material";
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
  textAlign: {
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
      textAlign: "left"
    },
  },
  stepperText: {
    width: '100%', marginTop: '20px', textAlign: "center"
  }
}));

function Index() {
  const classes = useStyles();
  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';
  const router = useRouter();
  const userContext = useUserContext();
  const context = useAppContext();

  const [allowed, setAllowed] = React.useState(null);

  const handleDate = (event) => {
    event.preventDefault();

    createRequest(userContext.user, context);
    router.push("/moving/address", undefined, {shallow: true})
  }

  useEffect(() => {
    if (userContext.user !== null) {
      fetch(context.apiUrl + '/gateways/logic/people', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brp: userContext.user.bsn,
        })
      })
        .then(response => response.json())
        .then((data) =>  {
          setAllowed(data);
        });
    }
  }, [userContext.user]);

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      {
        userContext.user == null
          ?
            <LoginScreen />
          :
          <Grid container spacing={3}>
            <Grid item className={classes.stepperText}>
              <Avatar sx={{ backgroundColor: "#001759", marginLeft: "auto", marginRight: "auto" }}>
                <LocalShippingIcon />
              </Avatar>
              <Typography mb={1} fontWeight="medium">
                Ik ga verhuizen
              </Typography>
            </Grid>

            <Grid item sm={12} xs={12} md={12} className={classes.textAlign}>
              <Typography variant="h4">
                Deze stappen ga je doorlopen
              </Typography>
            </Grid>
            <Grid item sx={{width: '100%', minWidth: '100%'}}>
              <Box className={classes.listStyle} sx={{p: 2, display: 'flex', alignItems: 'center'}}>
                <Avatar className={classes.stepsStyle} sx={{ margin: 0, backgroundColor: "#ad9156"}}><ForwardRounded/></Avatar>
                <span>Geef het adres op waar je naartoe verhuist</span>
              </Box>
              <Box className={classes.listStyle} sx={{p: 2, display: 'flex', alignItems: 'center'}}>
                <Avatar className={classes.stepsStyle} sx={{ margin: 0, backgroundColor: "#ad9156"}}><ForwardRounded/></Avatar>
                <span>Geef de datum op wanneer je gaat verhuisen</span>
              </Box>
              <Box className={classes.listStyle} sx={{p: 2, display: 'flex', alignItems: 'center'}}>
                <Avatar className={classes.stepsStyle} sx={{ margin: 0, backgroundColor: "#ad9156"}}><ForwardRounded/></Avatar>
                <span>Geef aan met wie je gaat verhuizen</span>
              </Box>
              <Box className={classes.listStyle} sx={{p: 2, display: 'flex', alignItems: 'center'}}>
                <Avatar className={classes.stepsStyle} sx={{ margin: 0, backgroundColor: "#ad9156"}}><ForwardRounded/></Avatar>
                <span>Geef aan hoe we je kunnen bereiken</span>
              </Box>
            </Grid>
            <br/>
            {
              allowed !== null &&
                <>
                    {
                      allowed.isEligible
                        ?
                          <Grid item>
                            <form onSubmit={handleDate}>
                              <Grid container>
                                <Grid item sm={12} xs={12} md={12} className={classes.textAlign}>
                                  <Button color="primary" type="submit" variant="contained" endIcon={<ChevronRight/>}>Starten</Button>
                                </Grid>
                              </Grid>
                            </form>
                          </Grid>
                        :
                        <Grid item>
                          <Stack
                            direction="row"
                            alignItems="center"
                          >
                            <div>{<WarningIcon color="warning" fontSize="large" sx={{marginRight: '40px'}}/>}</div>
                            <div style={{textAlign: 'left'}}>
                              <Typography variant="h5">Let op!</Typography>
                              <div>U bent helaas niet gemachtigd dit verzoek uit te voeren</div>
                            </div>
                          </Stack>
                        </Grid>
                    }

                </>
            }
          </Grid>
      }
    </Layout>
  </>;
}

export default Index

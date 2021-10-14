import Button from "@mui/material/Button";
import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import {Typography, Box} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import {useRouter} from "next/router";
import Stepper from "../../components/moving/stepper";
import {ChevronRight} from "@mui/icons-material";
import {ForwardRounded} from "@mui/icons-material";
import {Avatar} from "@mui/material";

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
  }
}));

function Index() {
  const classes = useStyles();
  const title = 'Deze stappen ga je doorlopen';
  const router = useRouter();

  const handleDate = (event) => {
    event.preventDefault();

    // Session set address

    router.push("/moving/address", undefined, {shallow: true})
  }

  const [value, setValue] = React.useState(new Date());

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container spacing={3}>
        <Stepper currentStep={0}/>

        <Grid item sm={12}>
          <Typography variant="h4" className={classes.titleStyle}>
            Deze stappen ga je doorlopen
          </Typography>

          <Box className={classes.boxStyle} sx={{p: 2, display: 'flex'}}>
            <Avatar className={classes.stepsStyle} sx={{margin: 0}}><ForwardRounded/></Avatar>
            <span>Geef je nieuwe adres op</span>
          </Box>
          <Box className={classes.boxStyle} sx={{p: 2, display: 'flex'}}>
            <Avatar className={classes.stepsStyle} sx={{margin: 0}}><ForwardRounded/></Avatar>
            <span>Geef de datum op wanneer je gaat verhuis</span>
          </Box>
          <Box className={classes.boxStyle} sx={{p: 2, display: 'flex'}}>
            <Avatar className={classes.stepsStyle} sx={{margin: 0}}><ForwardRounded/></Avatar>
            <span>Geef aan met wie je gaat verhuizen</span>
          </Box>
          <Box className={classes.boxStyle} sx={{p: 2, display: 'flex'}}>
            <Avatar className={classes.stepsStyle} sx={{margin: 0}}><ForwardRounded/></Avatar>
            <span>Geef aan hoe we je kunnen bereiken</span>
          </Box>
          <br/>

          <form onSubmit={handleDate} style={{textAlign: "center"}}>
            <Grid justifyContent="space-between" // Add it here :)
                  container>
              <Grid item sm={12}>
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

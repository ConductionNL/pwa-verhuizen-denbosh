import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import makeStyles from '@mui/styles/makeStyles';
import {useRouter} from 'next/router';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import {Paper} from "@mui/material";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import {useUserContext} from "../context/userContext";
import Typography from "@mui/material/Typography";
import {Login} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const router = useRouter()

  const [state, setState] = React.useState({
    bottumNavigation: 0,
  });

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        router.push('/')
    }

    setState({...state, ['bottumNavigation']: newValue});
  }

  let userContext = useUserContext();

  return (
    <footer>
      <Paper style={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation
          value={state['bottumNavigation']} onChange={handleChange}
          showLabels
          className={classes.sectionMobile}
        >

            {/*<BottomNavigationAction label="Home" icon={<HomeIcon/>}/>*/}
            {/*<BottomNavigationAction label="Klantvragen" icon={<SearchIcon/>}/>*/}
            {/*<BottomNavigationAction label="Notificaties" icon={<NotificationsIcon/>}/>*/}
            {/*<BottomNavigationAction label="Chatten" icon={<ChatIcon/>}/>*/}

          {
            userContext.user !== null
              ?
              <BottomNavigationAction label="Logout" icon={<LogoutIcon/>}/>
              :
              <BottomNavigationAction label="Login" icon={<Login/>}/>
          }
         </BottomNavigation>
            </Paper>
            <Box
            px={{xs: 3, sm: 10}}
            py={{xs: 5, sm: 10}}
            bgcolor="#00205C"
            color="white"
            className={classes.sectionDesktop}
            >
            <Container maxWidth="lg">
            <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
            <Box borderBottom={1}>Help</Box>
            <Box>
            <Link href="/" color="inherit">
            Contact
            </Link>
            </Box>
            <Box>
            <Link href="/" color="inherit">
            Support
            </Link>
            </Box>
            <Box>
            <Link href="/" color="inherit">
            Privacy
            </Link>
            </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Box borderBottom={1}>Contact</Box>
            <Box>Wolvenhoek 1, 's-Hertogenbosch
            </Box>
            <Box>
            <Link href="tel:(073) 615 51 55" color="inherit">
              (073) 615 51 55
            </Link>
            </Box>
            <Box>
              Postadres: <br/>
              Postbus 12345 <br/>
              5200 GZ ‘s-Hertogenbosch
            </Box>
            </Grid>
            </Grid>
            </Container>
            </Box>
            </footer>
            );
            }

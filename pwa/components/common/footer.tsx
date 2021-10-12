import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

import {makeStyles} from "@material-ui/core/styles";
import {useRouter} from 'next/router';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import {Paper} from "@material-ui/core";
import LogoutIcon from "@material-ui/icons/ExitToApp";

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


  return (
    <footer>
      <Paper style={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation
          value={state['bottumNavigation']} onChange={handleChange}
          showLabels
          className={classes.sectionMobile}
        >

            <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
            <BottomNavigationAction label="Klantvragen" icon={<SearchIcon/>}/>
            <BottomNavigationAction label="Notificaties" icon={<NotificationsIcon/>}/>
            <BottomNavigationAction label="Chatten" icon={<ChatIcon/>}/>
            <BottomNavigationAction label="Logout" icon={<LogoutIcon/>}/>
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

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
import {useAppContext} from "../context/state";

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    marginTop: 50
  },
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
  const router = useRouter();
  const context = useAppContext();

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

  const handleLogout = () => {
    sessionStorage.setItem('user', null);
    userContext.setUser(null);
    router.push('/');
  }

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      window.location.href = context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl + "/moving?state=8412312632";
    }
  }

  let userContext = useUserContext();

  return (
    <footer  className={classes.footerStyle}>
      <Paper style={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation
          value={state['bottumNavigation']} onChange={handleChange}
          showLabels
          className={classes.sectionMobile}
        >
          {
            userContext.user !== null
              ?
              <BottomNavigationAction onClick={handleLogout} label="Logout" icon={<LogoutIcon/>}/>
              :
              <BottomNavigationAction onClick={handleLogin} label="Login" icon={<Login/>}/>
          }
        </BottomNavigation>
      </Paper>
    </footer>
  );
}

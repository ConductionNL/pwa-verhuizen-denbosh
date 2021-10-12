import React from 'react';
import { alpha } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import Box from "@mui/material/Box";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Link from "next/link";
import Drawer from '@mui/material/Drawer';
import {useRouter} from 'next/router';


import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "./pageheader";
import Grid from "@mui/material/Grid";
import {eraseCookie, getCookie, setCookie} from "../../components/utility/CookieHandler";
import {useGet} from "restful-react";
import {useAppContext} from "../context/state";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
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
  list: {
    width: 250,
  },
  appbar: {
    backgroundColor: '#AD9156'
  },
}));

const handleLogout = (context) => {

  if (typeof window !== "undefined") {
      context.user = null;

      // @ts-ignore
      window.location.href = 'http://localhost/logout';
    }
}

export default function MainMenu() {

  const router = useRouter()
  const classes = useStyles();

  const [state, setState] = React.useState({
    displayMenuDrawer: false,
    displayUserDrawer: false,
    loggedIn: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const loginUser = (status) => {
    setState({...state, ['loggedIn']: status});
  };

  let context = useAppContext();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Container>
          <Toolbar>

            {/*{*/}
            {/*<div className={classes.sectionMobile}>*/}
            {/*  <IconButton aria-label="show 17 new notifications" color="inherit"*/}
            {/*              onClick={toggleDrawer('displayUserDrawer', true)}>*/}
            {/*    <MenuIcon/>*/}
            {/*  </IconButton>*/}
            {/*  <Drawer anchor={'left'} open={state['displayUserDrawer']}*/}
            {/*          onClose={toggleDrawer('displayUserDrawer', false)}>*/}
            {/*    <div*/}
            {/*      className={classes.list}*/}
            {/*      role="presentation"*/}
            {/*      onClick={toggleDrawer('displayUserDrawer', false)}*/}
            {/*      onKeyDown={toggleDrawer('displayUserDrawer', false)}*/}
            {/*    >*/}
            {/*      <ActionMenu/>*/}
            {/*    </div>*/}
            {/*  </Drawer>*/}
            {/*</div>*/}
            {/*}*/}

            <div className={classes.grow}/>

            <Box style={{marginRight: "15px"}}>
              <Typography variant="h6" color="inherit">
                {
                  context.user !== null &&
                  <Link href="/user" >
                  <span style={{color: 'white'}}>
                    {
                      context.user.name
                    }
                  </span>
                  </Link>
                }

              </Typography>
            </Box>
            <Box marginRight={2}>
              <Typography variant="h6" color="inherit">
                    {
                      context.user !== null
                        ?
                          <span onClick={() => {handleLogout(context)}} style={{color: 'white'}}>Uitloggen</span>
                        :
                          <Link href="http://localhost/login/adfs/conduction" >
                            <span style={{color: 'white'}}>Inloggen</span>
                          </Link>
                    }
              </Typography>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

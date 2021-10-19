import React, {useEffect} from 'react';
import {alpha} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Link from "next/link";
import {useRouter} from 'next/router';
import {useAppContext} from "../context/state";
import {useUserContext} from "../context/userContext";
import Button from "@mui/material/Button";
import {ChevronRight} from "@mui/icons-material";
import {Stack} from "@mui/material";

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
    backgroundColor: '#AD9156',
    boxShadow: "none"
  },
}));

const handleLogout = (context) => {

  if (typeof window !== "undefined") {
    context.setUser(null);
    sessionStorage.setItem('user', null);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem('user') !== null) {
        userContext.setUser(JSON.parse(sessionStorage.getItem('user')));
      }
    }
  }, []);



  const handleLogout = () => {
    sessionStorage.setItem('user', null);
    userContext.setUser(null);
    router.push('/');
  }

  let context = useAppContext();
  let userContext = useUserContext();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Container>
          <Stack
            sx={{minHeight: '64px'}}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h6" color="inherit">
              {
                userContext.user !== null &&
                <span style={{color: 'white'}}>
              {
                userContext.user.name
              }
                </span>
              }
            </Typography>
            <Typography variant="h6" color="inherit">
              {
                userContext.user !== null
                  ?
                  <span onClick={handleLogout} style={{color: 'white'}}>Uitloggen</span>
                  :
                  // <Link href="http://localhost/login/adfs/conduction">
                  //   <span style={{color: 'white'}}>Inloggen</span>
                  // </Link>
                  <Link
                    href={context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl + "/moving?state=8412312632"}>
                    <span style={{color: 'white'}}>Inloggen</span>
                  </Link>
              }
            </Typography>
          </Stack>
        </Container>
      </AppBar>
    </div>
  );
}

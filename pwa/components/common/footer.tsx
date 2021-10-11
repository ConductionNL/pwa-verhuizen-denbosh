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
import { useRouter } from 'next/router';

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
    if(newValue == 'displayUserDrawer'){
      // setState({ ...state, ['displayUserDrawer']: true });
    }
    else {
      router.push('/' + newValue)
    }
    setState({ ...state, ['bottumNavigation']: newValue });
  };


  return (
    <footer>
      <BottomNavigation
        value={state['bottumNavigation']} onChange={handleChange}
        showLabels
        className={classes.sectionMobile}
      >
        <BottomNavigationAction label="Messages" value="messages" icon={<MailIcon />} />
        <BottomNavigationAction label="Tasks" value="tasks" icon={<NotificationsIcon />} />
        <BottomNavigationAction label="User" value="displayUserDrawer" icon={<PersonIcon />} />
      </BottomNavigation>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#A3B2B6"
        color="white"
        className={classes.sectionDesktop}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Participerende gemeenten</Box>
              <Box>Deventer
              </Box>
              <Box>Enschede
              </Box>
              <Box>Groningen
              </Box>
              <Box>Leeuwarden</Box>
              <Box>Zaanstad
              </Box>
              <Box>Zwolle
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
                  Stadhuisplein 100 <br />
                  1506 MZ Zaandam
              </Box>
              <Box>
                <Link href="tel:14 075" color="inherit">
                14 075
                </Link>
              </Box>
              <Box>
                <Link href="mailto:info@Zaanstad.nl" color="inherit">
                  info@Zaanstad.nl
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

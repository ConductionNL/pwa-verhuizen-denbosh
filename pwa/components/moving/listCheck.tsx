import React, {useEffect} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {CalendarToday, LocationOn, People, Person} from "@mui/icons-material";
import {useUserContext} from "../context/userContext";
import {useAppContext} from "../context/state";
import {Grid, ListItemButton, Stack, Typography} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inputLength: {
    width: '400px',
  },
}));

export default function CheckList() {
  const classes = useStyles();

  const userContext = useUserContext();
  const context = useAppContext();
  const [request, setRequest] = React.useState(null);
  const [mainBsn, setMainBsn] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [movers, setMovers] = React.useState([]);

  const handleMainBsn = () => {
    if (userContext.user !== null) {
      fetch(context.apiUrl + '/gateways/brp/ingeschrevenpersonen/' + userContext.user.bsn, {
        method: 'GET',
        credentials: 'include',
      })
        .then(response => response.json())
        .then((data) =>  {
          setMainBsn(data);
        });
    }
  }

  const handleNewAddress = () => {
    let requestObject = JSON.parse(sessionStorage.getItem('request'));
    if (requestObject !== null && requestObject.properties.adress !== undefined) {
      fetch(context.apiUrl + "/gateways/as/adressen/" + requestObject.properties.adress, {
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then((data) => {
          setAddress(data);
        });
    }
  }

  const handleMovers = () => {
    let requestObject = JSON.parse(sessionStorage.getItem('request'));

    if (requestObject !== null && requestObject.properties.wie !== undefined) {
      let arr = requestObject.properties.wie.split(',');
      for (let i = 0; i < arr.length; i++ ) {
        fetch(context.apiUrl + '/gateways/brp/ingeschrevenpersonen/' + arr[i], {
          method: 'GET',
          credentials: 'include',
        })
          .then(response => response.json())
          .then((data) =>  {
            let newMovers = movers;

            if (newMovers.filter(order => (order.burgerservicenummer === data.burgerservicenummer)).length == 0) {
              newMovers.push(data);
              setMovers([]);
              setMovers(newMovers);
            }

          });
      }
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem('request') !== null) {
      setRequest(JSON.parse(sessionStorage.getItem('request')));
    }
    handleMainBsn();
    handleNewAddress();
    handleMovers();
  }, []);

  return (
    <>
      {
        request !== null &&
          <>
            <Grid container>
              <Grid item sx={{ width: '100%', marginTop: '20px' }}>
                <Stack
                  spacing={1}
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                >
                  <div style={{marginRight: '20px'}}>
                    <Avatar sx={{ backgroundColor: "#ad9156"}}>
                      <Person />
                    </Avatar>
                  </div>
                  <div style={{textAlign: 'left'}}>
                    <Typography variant="h6">Indiener</Typography>
                    <div>
                      {
                        mainBsn !== null &&
                        mainBsn.naam.aanschrijfwijze
                      }
                    </div>
                  </div>
                </Stack>
              </Grid>
              <Grid item sx={{ width: '100%', marginTop: '20px' }}>
                <Stack
                  spacing={1}
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                >
                  <div style={{marginRight: '20px', float: "left"}}>
                    <Avatar sx={{ backgroundColor: "#ad9156"}}>
                      <LocationOn/>
                    </Avatar>
                  </div>
                  <div style={{textAlign: 'left', float: "left"}}>
                    <Typography variant="h6">Oud adres</Typography>
                    <div>
                      {
                        mainBsn !== null &&
                        mainBsn.verblijfplaats.adresregel1
                      }
                      {
                        mainBsn !== null && mainBsn.verblijfplaats.adresregel2 !== undefined &&
                          ", " + mainBsn.verblijfplaats.adresregel2
                      }
                    </div>
                  </div>
                </Stack>
              </Grid>
              <Grid item sx={{ width: '100%', marginTop: '20px' }}>
                <Stack
                  spacing={1}
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                >
                  <div style={{marginRight: '20px'}}>
                    <Avatar sx={{ backgroundColor: "#ad9156"}}>
                      <LocationOn/>
                    </Avatar>
                  </div>
                  <div style={{textAlign: 'left'}}>
                    <Typography variant="h6">Nieuw adres</Typography>
                    <div>
                      {
                        address !== null && address.straat !== undefined &&
                          <>
                            {address.straat + " " + address.huisnummer}
                            {address.huisnummertoevoeging !== null && address.huisnummertoevoeging}
                            {", " + address.postcode + " " + address.woonplaats}
                          </>
                      }
                      {
                        address !== null && address.error !== undefined &&
                        <>
                          {address.error.straat + " " + address.error.huisnummer}
                          {address.error.huisnummertoevoeging !== null && address.error.huisnummertoevoeging}
                          {", " + address.error.postcode + " " + address.error.woonplaats}
                        </>
                      }
                    </div>
                  </div>
                </Stack>
              </Grid>
              <Grid item sx={{ width: '100%', marginTop: '20px' }}>
                <Stack
                  spacing={1}
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                >
                  <div style={{marginRight: '20px'}}>
                    <Avatar sx={{ backgroundColor: "#ad9156"}}>
                      <CalendarToday />
                    </Avatar>
                  </div>
                  <div style={{textAlign: 'left'}}>
                    <Typography variant="h6">Verhuisdatum</Typography>
                    <div>
                      {
                        request !== null && request.properties.datum !== undefined &&
                          request.properties.datum
                      }
                    </div>
                  </div>
                </Stack>
              </Grid>
              <Grid item sx={{ width: '100%', marginTop: '20px' }}>
                <Stack
                  spacing={1}
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                >
                  <div style={{marginRight: '20px'}}>
                    <Avatar sx={{ backgroundColor: "#ad9156"}}>
                      <People />
                    </Avatar>
                  </div>
                  <div style={{textAlign: 'left'}}>
                    <Typography variant="h6">Verhuizende personen</Typography>
                    <div>
                      {
                        movers.length !== 0 &&
                        movers.map((coMover) => {
                          return (
                            <div>{coMover.naam.aanschrijfwijze + ", geboren op " + coMover.geboorte.datum.datum}</div>
                          );
                        })
                      }
                    </div>
                  </div>
                </Stack>
              </Grid>
              <Grid item sx={{ width: '100%', marginTop: '20px' }}>
                <Stack
                  spacing={1}
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                >
                  <div style={{marginRight: '20px'}}>
                    <Avatar sx={{ backgroundColor: "#ad9156"}}>
                      <Person />
                    </Avatar>
                  </div>
                  <div style={{textAlign: 'left'}}>
                    <Typography variant="h6">Contactinformatie</Typography>
                    <div>
                      {
                        request !== null && request.properties.email !== undefined &&
                          request.properties.email
                      }
                    </div>
                    <div>
                      {
                        request !== null && request.properties.tel !== undefined &&
                          request.properties.tel
                      }
                    </div>
                  </div>
                </Stack>
              </Grid>
            </Grid>
          </>
      }
    </>
  );
}

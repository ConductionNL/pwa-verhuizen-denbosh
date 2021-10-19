import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {CalendarToday, LocationOn, People, Person} from "@mui/icons-material";

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

  return (
    <List className={classes.inputLength} sx={{backgroundColor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#ad9156"}}>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Indiener" secondary="John Doe" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#ad9156" }}>
            <LocationOn/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Oud adres" secondary="Appelstraat 1, 1234AB 's Hertogenbosch" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#ad9156" }}>
            <LocationOn/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nieuw adres" secondary="Appelstraat 2, 1234AB 's Hertogenbosch" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#ad9156" }}>
            <CalendarToday />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Verhuisdatum" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#ad9156" }}>
            <People />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Meeverhuizers" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#ad9156" }}>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Contactgegevens" secondary="Email: john@doe.com, telefoonnummer: +3161234567" />
      </ListItem>
    </List>
  );
}

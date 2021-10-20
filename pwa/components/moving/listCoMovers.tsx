import React, {useEffect} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {Divider, ListItemButton} from "@mui/material";
import {useUserContext} from "../context/userContext";
import {useAppContext} from "../context/state";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inputLength: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
}));

export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [mainBsn, setMainBsn] = React.useState(null);
  const [coMovers, setCoMovers] = React.useState(null);

  const userContext = useUserContext();
  const context = useAppContext();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

  };

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

  const handleCoMovers = () => {
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
          setCoMovers(data.coMovers);
        });
    }
  }

  useEffect(() => {
    handleMainBsn();
    handleCoMovers();
  }, [userContext.user]);

  return (
    <List className={classes.inputLength} sx={{backgroundColor: 'background.paper' }}>
      {
        mainBsn !== null &&
        <ListItem
          key={'test'}
          disablePadding
        >
          <ListItemButton role={undefined}  dense>
            <ListItemIcon>
              <Checkbox
                className={'bsnCheckbox'}
                sx={{
                  '&.Mui-checked': {
                    color: "#8DA185"
                  },
                }}
                edge="start"
                name={'movers'}
                checked={true}
                tabIndex={-1}
                value={mainBsn.burgerservicenummer}
                inputProps={{ 'aria-labelledby': 'checkbox-list-label-' + mainBsn.naam.aanschrijfwijze}}
              />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{fontWeight: "bold"}} id={'checkbox-list-label-'} primary={mainBsn.naam.aanschrijfwijze + ", geboren op " + mainBsn.geboorte.datum.datum} />
          </ListItemButton>
        </ListItem>
      }
      <Divider />
      {
        coMovers !== null &&
          coMovers.map((coMover) => {
            return (
              <ListItem
                key={coMover.naam.aanschrijfwijze}
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(coMover.naam.aanschrijfwijze)} dense>
                  <ListItemIcon>
                    <Checkbox
                      sx={{
                        '&.Mui-checked': {
                          color: "#77d353"
                        },
                      }}
                      className={'bsnCheckbox'}
                      edge="start"
                      checked={checked.indexOf(coMover.naam.aanschrijfwijze) !== -1}
                      tabIndex={-1}
                      disableRipple
                      value={coMover.burgerservicenummer}
                      inputProps={{ 'aria-labelledby': coMover.naam.aanschrijfwijze }}
                    />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontWeight: "bold"}} id={coMover.naam.aanschrijfwijze} primary={coMover.naam.aanschrijfwijze + ", geboren op " + coMover.geboorte.datum.datum} />
                </ListItemButton>
              </ListItem>
            );
          })

      }
    </List>
  );
}

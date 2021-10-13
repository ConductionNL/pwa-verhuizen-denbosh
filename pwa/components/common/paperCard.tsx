import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardHeader, Paper} from "@mui/material";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StandardCard({title = null, secondaryTitle = null, description = null, link = null, linkText = "Lees Meer"}       ) {
  const classes = useStyles();

  return (
    <Paper elevation={1}>
      <Card className={classes.root} variant="outlined" style={{minHeight: '310px', display: "flex", flexDirection: "column", padding: "20px"}}>
        {
          title != null &&
          <CardHeader
            title={title}
          />
        }
        <CardContent>
          {
            secondaryTitle != null &&
            <Typography className={classes.pos} color="textPrimary">
              <strong>{secondaryTitle}</strong>
            </Typography>
          }
          {
            description != null &&
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          }
        </CardContent>
        {
          link != null &&
          <CardActions style={{marginTop: "auto", marginLeft: "auto"}}>
            <Button variant="contained" color="primary" href={link} style={{ color: 'white' }}>
              {linkText} {'>'}
            </Button>
          </CardActions>
        }
      </Card>
    </Paper>
  );
}

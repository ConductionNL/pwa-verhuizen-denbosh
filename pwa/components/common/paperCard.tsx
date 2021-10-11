import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardHeader, Paper} from "@material-ui/core";

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

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import MessagesList from "../tasks/messages";
import {Paper} from "@material-ui/core";
import MessageTable from "./table";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '1000px',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MessagesCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card className={classes.root}>
                <CardContent>
                  <Paper elevation={3}>
                    {/*<MessageTable/>*/}
                  </Paper>
                </CardContent>
            </Card>
          </Grid>
    </Grid>
  );
}

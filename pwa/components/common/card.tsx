import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";

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

export default function StandardCard({smallUpperTitle = null, title = null, secondaryTitle = null, description = null, link = null}       ) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" sx={{minHeight: '200px', display: "flex", flexDirection: "column"}}>
      <CardContent>
        {
          smallUpperTitle != null &&
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {smallUpperTitle}
          </Typography>
        }
        {
          title != null &&
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        }
        {
          secondaryTitle != null &&
          <Typography className={classes.pos} color="textSecondary">
            {secondaryTitle}
          </Typography>
        }
        {
          description != null &&
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        }
      </CardContent>
      <CardActions sx={{marginTop: "auto"}}>
        <Button size="small" >
          <Link href={link}>
            Lees meer
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

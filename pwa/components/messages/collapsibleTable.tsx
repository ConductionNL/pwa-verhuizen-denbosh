import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CardContent from "@material-ui/core/CardContent";
import {TableFooter} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  button: {
    paddingTop: '20px',
  },
});

function createData(name, description) {
  return {
    name,
    description,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow key={row.name}>
                    <TableCell  component="th" scope="row">
                      {row.description}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Wat betekent mijn geregistreerde inkomen?', 'Omschrijving'),
  createData('Mijn geregistreerde inkomen klopt niet. Wat kan ik doen?', 'Omschrijving'),
  createData('Ik heb een inkomstenverklaring nodig. Wat moet ik doen?', 'Omschrijving'),
];

export default function CollapsibleTable() {
  const classes = useRowStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <Typography gutterBottom variant="h5" component="h2">
            Veelgestelde vragen
          </Typography>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
        <TableFooter className={classes.button}>
          <Typography className={classes.button}>
            <Link href="#" onClick={preventDefault}>
              Bekijk alle veelgestelde vragen {'>'}
            </Link>
          </Typography>
          {/*<Button variant="underline" color="primary">*/}
          {/*  <Link href={"/news/"} >*/}
          {/*    Bekijk alle veelgestelde vragen {'>'}*/}
          {/*  </Link>*/}
          {/*</Button>*/}
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

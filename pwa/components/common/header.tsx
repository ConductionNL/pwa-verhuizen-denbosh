import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import IconButton from "@material-ui/core/IconButton";

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

export default function Header() {

  const classes = useStyles();
  return (
    <header>

      <div className={classes.sectionDesktop}>
        <Logo />
      </div>

      <MainMenu />
    </header>
  );
}

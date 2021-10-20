import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import IconButton from "@mui/material/IconButton";
import {Link} from "@mui/material";
import {maxHeight} from "@mui/system";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      marginTop: '20px',
      marginBottom: '20px'
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
  const router = useRouter();

  const direct = () => {
    router.push('/');
  }

  return (
    <header>

      <div className={classes.sectionDesktop}>
        <img onClick={direct} style={{maxHeight: '100px', cursor: "pointer"}} src="https://www.s-hertogenbosch.nl/typo3conf/ext/website_shertogenbosch/Resources/Public/Images/logo.svg"/>
      </div>

      <MainMenu />
    </header>
  );
}

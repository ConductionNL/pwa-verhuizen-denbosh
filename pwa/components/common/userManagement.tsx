import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import IconButton from "@mui/material/IconButton";
import {useAppContext} from "../context/state";
import {useGet} from "restful-react";


export default function UserManagement() {

  const handleLogin = () => {

    let context = useAppContext();
    const { data: info } = useGet({
      path: context.meUrl,
    });

    if (info !== null && info !== undefined) {
      context.user = info;
    }

    console.log(info);
    console.log(context);
  }

  return (
    <p>
      {
        handleLogin()
      }
    </p>
  );
}

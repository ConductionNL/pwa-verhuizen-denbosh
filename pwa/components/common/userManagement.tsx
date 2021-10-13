import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import IconButton from "@mui/material/IconButton";
import {useAppContext} from "../context/state";
import {useGet} from "restful-react";
import {useUserContext} from "../context/userContext";


export default function UserManagement() {

  const handleLogin = () => {

    let context = useUserContext();
    const { data: info } = useGet({
      path: context.meUrl,
    });

    if (info !== null && info !== undefined) {
      context.setUser(info);
      sessionStorage.setItem('user', JSON.stringify(info));
    }

  }

  return (
    <p>
      {
        handleLogin()
      }
    </p>
  );
}

import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
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

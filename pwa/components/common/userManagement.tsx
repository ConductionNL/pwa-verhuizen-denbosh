import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
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

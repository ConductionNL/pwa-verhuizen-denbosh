import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import Toolbar from "@mui/material/Toolbar";
import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import {useAppContext} from "../context/state";
import {useGet} from "restful-react";
import {useUserContext} from "../context/userContext";
import {useRouter} from "next/router";


export default function UserManagement() {

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      let userContext = useUserContext();
      let context = useAppContext();
      const router = useRouter();
      const { data: info } = useGet({
        path: context.meUrl,
      });

      const params = new URLSearchParams(window.location.search);

      if (info !== null && info !== undefined && params.has('state')) {
        let data = {
          bsn: info.email,
          name: info.name,
          firstName: info.first_name,
          lastName: info.last_name,
        }

        userContext.setUser(null);
        sessionStorage.setItem('user', JSON.stringify(data));
        router.push('/moving/moving');
        return null;
      }
    }
  }

  return (
    <div>
      {handleLogin()}
    </div>
  );
}

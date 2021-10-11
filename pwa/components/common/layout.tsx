import Head from "next/head";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import React from "react";

import Header from "./header";
import Footer from "./footer";
import {makeStyles} from "@material-ui/core/styles";
import {RestfulProvider, useGet} from "restful-react";
import {useAppContext} from "../context/state";
import {setCookie} from "../utility/CookieHandler";
import UserManagement from "./userManagement";


const useStyles = makeStyles((theme) => ({
  containerRuben: {
    paddingTop: theme.spacing(24, 24, 24, 24),
    backgroundColor: '#F5F5F5',
  }
}));


const Layout = ({children, title="Welcome to Demodam!", h1 =null, description="default-description"}) => {

  const classes = useStyles();

  let context = useAppContext();

  return (
    <>
      <RestfulProvider
        base={context.apiUrl}
        requestOptions={(url, method, requestBody) => ({ headers: { Accept: 'application/json' }, credentials: 'include', mode: 'cors' })}>
        <Head>
          <title>{title}</title>
        </Head>

        <UserManagement />

        <Header/>

        <Container>
          <Box paddingTop={2} paddingBottom={2}>
          {children}
          </Box>
        </Container>

        <Footer />
      </RestfulProvider>
    </>
  );

}

export default Layout;

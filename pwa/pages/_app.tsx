// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {AppWrapper, useAppContext} from "../components/context/state";
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import {UserContextWrapper} from "../components/context/userContext";
import {RestfulProvider} from "restful-react";
import {RestfulProviderWrapper} from "../components/utility/RestfulProviderWrapper";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const theme = createTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some css that access to theme
  }
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <AppWrapper>
        <UserContextWrapper>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <RestfulProviderWrapper>
                <Component {...pageProps} />
              </RestfulProviderWrapper>
            </ThemeProvider>
          </StyledEngineProvider>
        </UserContextWrapper>
      </AppWrapper>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;



import React, {useEffect} from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import getConfig from 'next/config';

const generateCsp = (): [csp: string, nonce: string] => {

  const nonce = publicRuntimeConfig.nonce;

  let csp = ``;
  csp += `default-src 'none';`;
  csp += `base-uri 'self';`;
  csp += `prefetch-src 'self';`;
  csp += `style-src 'self' 'nonce-${nonce}' data:;`;
  csp += `script-src 'nonce-${nonce}' 'self' 'unsafe-eval';`;
  csp += `img-src 'self' https://www.logius.nl https://www.s-hertogenbosch.nl;`
  csp += `font-src 'self' https://fonts.gstatic.com;`;
  csp += `connect-src 'self';`;


  return [csp, nonce];
};

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
let referrer = "strict-origin";

const inlineScript = (body, nonce) => (
  <script
    type='text/javascript'
    dangerouslySetInnerHTML={{ __html: body }}
    nonce={nonce}
  />
)



export default class MyDocument extends Document {
  render() {
    const [csp, nonce] = generateCsp();
    return (
      <Html lang="en">
        <Head nonce={publicRuntimeConfig.nonce}>
          {inlineScript(`window.__webpack_nonce__="${publicRuntimeConfig.nonce}"`, publicRuntimeConfig.nonce)}
          <meta property='csp-nonce' content={publicRuntimeConfig.nonce} />
          <meta httpEquiv='Content-Security-Policy' content={csp} />
          <meta name="referrer" content={referrer} />
          <meta name="theme-color"/>
          <link nonce={publicRuntimeConfig.nonce} rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.css"/>

        </Head>
        <body>
        <Main />
        <NextScript nonce={publicRuntimeConfig.nonce} />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

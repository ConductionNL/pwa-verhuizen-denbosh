import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import crypto from 'crypto';
import { v4 } from 'uuid';

const generateCsp = (): [csp: string, nonce: string] => {
  const production = process.env.NODE_ENV === 'production';

  // generate random nonce converted to base64. Must be different on every HTTP page load
  const hash = crypto.createHash('sha256');
  hash.update(v4());
  const nonce = hash.digest('base64');

  let csp = ``;
  csp += `default-src 'none';`;
  csp += `base-uri 'self';`;
  csp += `style-src https://fonts.googleapis.com 'unsafe-inline';`; // NextJS requires 'unsafe-inline'
  csp += `script-src 'nonce-${nonce}' 'self' ${production ? '' : "'unsafe-eval'"};`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
  csp += `img-src https://www.logius.nl https://www.s-hertogenbosch.nl;`
  // csp += `font-src https://fonts.gstatic.com http://localhost:3000;`;
  // csp += `connect-src 'self' http://localhost;`;
  csp += `font-src https://fonts.gstatic.com;`;
  csp += `connect-src 'self';`;

  // if (typeof window !== "undefined") {
  //   if (window.location.href.includes('http://localhost')) {
  //     csp += `font-src https://fonts.gstatic.com http://localhost:3000;`;
  //     csp += `connect-src 'self' http://localhost;`;
  //   } else {
  //     csp += `font-src https://fonts.gstatic.com;`;
  //     csp += `connect-src 'self';`;
  //   }
  // }

  return [csp, nonce];
};

export default class MyDocument extends Document {
  render() {
    const [csp, nonce] = generateCsp();
    return (
      <Html lang="en">
        <Head nonce={nonce}>
          <meta property='csp-nonce' content={nonce} />
          <meta httpEquiv='Content-Security-Policy' content={csp} />
          {/* Not exactly required, but this is the PWA primary color */}
          <meta name="theme-color"/>
        </Head>
        <body>
        <Main />
        <NextScript nonce={nonce} />
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

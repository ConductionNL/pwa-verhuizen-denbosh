let nonce = "";
let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(let i = 0; i < possible.length; i++) {
  nonce += possible.charAt(Math.floor(Math.random() * possible.length));
}

let csp = ``;
csp += `default-src 'none';`;
csp += `base-uri 'self';`;
csp += `prefetch-src 'self';`;
csp += `style-src 'self' 'nonce-${nonce}' ;`;
csp += `script-src 'nonce-${nonce}' 'self' 'unsafe-eval';`;
csp += `img-src 'self' https://www.logius.nl https://www.s-hertogenbosch.nl;`
// csp += `font-src 'self' https://fonts.gstatic.com;`;
// csp += `connect-src 'self';`;
csp += `font-src 'self' https://fonts.gstatic.com http://localhost:3000;`;
csp += `connect-src 'self' http://localhost;`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: csp
  }
];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    loader: 'imgix',
    path: '/',
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_ENTRYPOINT: process.env.NEXT_PUBLIC_ENTRYPOINT || "http://localhost",
    NEXT_PUBLIC_ME_URL: process.env.NEXT_PUBLIC_ME_URL || 'http://localhost/me',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost/api',
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',
    NEXT_PUBLIC_ORGANIZATION: process.env.NEXT_PUBLIC_ORGANIZATION || 'http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43'
  },
};

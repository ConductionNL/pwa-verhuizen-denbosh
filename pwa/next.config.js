module.exports = {
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

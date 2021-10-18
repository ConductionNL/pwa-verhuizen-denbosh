module.exports = {
  images: {
    loader: 'imgix',
    path: '/',
  },
  serverRuntimeConfig: {
    NEXT_PUBLIC_ENTRYPOINT: process.env.NEXT_PUBLIC_ENTRYPOINT || "http://localhost",
  },
};

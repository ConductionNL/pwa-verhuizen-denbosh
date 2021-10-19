import { createContext, useContext } from 'react';

const AppContext = createContext(undefined);

export function AppWrapper({ children }) {

  let sharedState = {
    meUrl: process.env.NEXT_PUBLIC_ME_URL !== undefined ? process.env.NEXT_PUBLIC_ME_URL : 'http://localhost/me',
    apiUrl: process.env.NEXT_PUBLIC_API_URL !== undefined ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost/api',
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL !== undefined ? process.env.NEXT_PUBLIC_BASE_URL : 'http://localhost',
    frontendUrl: process.env.NEXT_PUBLIC_FRONTEND_URL !== undefined ? process.env.NEXT_PUBLIC_FRONTEND_URL : 'http://localhost:3000',
    organization: process.env.NEXT_PUBLIC_ORGANIZATION !== undefined ? process.env.NEXT_PUBLIC_ORGANIZATION : 'http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43',
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

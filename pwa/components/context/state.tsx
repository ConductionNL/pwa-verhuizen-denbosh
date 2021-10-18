import { createContext, useContext } from 'react';

const AppContext = createContext(undefined);

export function AppWrapper({ children }) {

  let sharedState = {};
  let meUrl;
  let apiUrl;
  let baseUrl;
  let frontendUrl;

  if (typeof window !== 'undefined') {
    if (window.location.href.includes('http://localhost')) {
      meUrl = 'http://localhost/me';
      apiUrl = 'http://localhost/api';
      baseUrl = 'http://localhost';
      frontendUrl = 'http://localhost:3000';
    } else if (window.location.href.includes('https://verhuizen.demodam.nl')) {
      meUrl = 'https://verhuizen.demodam.nl/api/users/me';
      apiUrl = 'https://verhuizen.demodam.nl/api';
      baseUrl = 'https://verhuizen.demodam.nl';
      frontendUrl = 'https://verhuizen.demodam.nl';
    }
    else
    {
      meUrl = 'https://verhuizen.accp.s-hertogenbosch.nl/api/users/me';
      apiUrl = 'https://verhuizen.accp.s-hertogenbosch.nl/api';
      baseUrl = 'https://verhuizen.accp.s-hertogenbosch.nl';
      frontendUrl = 'https://verhuizen.accp.s-hertogenbosch.nl';
    }


    sharedState = {
      meUrl: meUrl,
      apiUrl: apiUrl,
      baseUrl: baseUrl,
      frontendUrl: frontendUrl,
    }
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

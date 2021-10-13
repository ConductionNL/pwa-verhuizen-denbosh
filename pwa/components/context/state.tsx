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
    }
    else
    {
      meUrl = 'https://verhuizen.demodam.nl/users/me';
      apiUrl = 'https://verhuizen.demodam.nl/api';
      baseUrl = 'https://verhuizen.demodam.nl';
      frontendUrl = 'https://verhuizen.demodam.nl';
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

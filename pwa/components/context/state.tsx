import { createContext, useContext } from 'react';

const AppContext = createContext(undefined);

export function AppWrapper({ children }) {

  let sharedState = {};
  let meUrl;
  let apiUrl;
  let baseUrl;

  if (typeof window !== 'undefined') {
    if (window.location.href.includes('http://localhost')) {
      meUrl = 'http://localhost/me';
      apiUrl = 'http://localhost/api';
      baseUrl = 'http://localhost';
    }
    else
    {
      meUrl = 'https://verhuizen.demodam.nl/users/me';
      apiUrl = 'https://verhuizen.demodam.nl/api';
      baseUrl = 'https://verhuizen.demodam.nl';
    }


    sharedState = {
      meUrl: meUrl,
      apiUrl: apiUrl,
      baseUrl: baseUrl
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

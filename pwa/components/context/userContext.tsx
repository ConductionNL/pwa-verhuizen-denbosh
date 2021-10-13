import {createContext, useContext, useState} from 'react';

const UserContext = createContext(undefined);

export function UserContextWrapper({ children }) {

  const ISSERVER = typeof window === "undefined";

  let storedUser = null;

  if(!ISSERVER) {
    storedUser = sessionStorage.getItem('user');
  }

  if (storedUser !== null) {
    storedUser = JSON.parse(storedUser);
  }

  const [user, setUser] = useState(storedUser);

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}


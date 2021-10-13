import {useAppContext} from "../context/state";
import {RestfulProvider} from "restful-react";

export function RestfulProviderWrapper({ children }) {

  const context = useAppContext();

  return (
    <RestfulProvider
      base={context.apiUrl}
      requestOptions={(url, method, requestBody) => ({ headers: { Accept: 'application/json' }, credentials: 'include', mode: 'cors' })}>
      {children}
    </RestfulProvider>
  );
}


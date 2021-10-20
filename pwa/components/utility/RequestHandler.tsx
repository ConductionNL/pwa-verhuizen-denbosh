import {useUserContext} from "../context/userContext";

export function createRequest(user, context) {

  if (typeof window !== "undefined") {

    fetch(context.apiUrl + '/gateways/vrc/requests', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        organization: context.organization,
        properties: {
          eigenaar: true,
          ingangsdatum: '01-01-2000',
          doorgeven_gegevens: false
        },
        submitters: [
          {
            bsn: user.bsn
          }
        ]
      })
    })
      .then(response => response.json())
      .then((data) =>  {
        if (typeof window !== "undefined") {

          let result = {
            id: data.id,
            reference: data.reference,
            organization: data.organization,
            properties: data.properties
          }

          console.log(result);

          sessionStorage.setItem('request', JSON.stringify(result));
          return null;
        }
      });
  }

}

export function updateRequest(context, key, value) {
  if (typeof window !== "undefined") {
    let request = JSON.parse(sessionStorage.getItem('request'));
    request.properties[key] = value;

    fetch(context.apiUrl + '/gateways/vrc/requests/' + request.id, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
      .then(response => response.json())
      .then((data) =>  {
        if (typeof window !== "undefined") {

          let result = {
            id: data.id,
            reference: data.reference,
            organization: data.organization,
            properties: data.properties
          }

          sessionStorage.setItem('request', JSON.stringify(result));
          return null;
        }
      });
  }

}

export function submitRequest(context) {
  if (typeof window !== "undefined") {
    let request = JSON.parse(sessionStorage.getItem('request'));

    request.status = 'submitted';

    fetch(context.apiUrl + '/gateways/vrc/requests/' + request.id, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
      .then(response => response.json())
      .then((data) =>  {
        if (typeof window !== "undefined") {

          let result = {
            id: data.id,
            reference: data.reference,
            organization: data.organization,
            properties: data.properties
          }

          sessionStorage.setItem('request', JSON.stringify(result));
          return null;
        }
      });
  }

}

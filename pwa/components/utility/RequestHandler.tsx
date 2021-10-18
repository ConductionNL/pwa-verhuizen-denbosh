import {useUserContext} from "../context/userContext";

export function createRequest(user, context) {

  if (typeof window !== "undefined") {
    let organization;

    if (window.location.href.includes('http://localhost')) {
      organization = 'http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43';
    } else if (window.location.href.includes('https://verhuizen.demodam.nl')) {
      organization = 'http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43';
    }
    else
    {
      organization = 'http://webresourcecatalogus.verhuizen.svc.cluster.local/organizations/4f387d0e-a2e5-44c0-9902-c31b63a8ee36';
    }

    fetch(context.apiUrl + '/gateways/vrc/requests', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        organization: organization,
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

          sessionStorage.setItem('request', JSON.stringify(result));
          return null;
        }
      });
  }

}

export function updateRequest(context, key, value) {
  if (typeof window !== "undefined") {
    let request = JSON.parse(sessionStorage.getItem('request'));

    let exist = false;

    for (let i = 0; i < request.properties.length; i ++) {
      if (key in request.properties[i]) {
        exist = true;
        request.properties[i][key] = value;
      }
    }

    if (!exist) {
      let result = {};
      result[key] = value;

      request.properties.push(result);
    }

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

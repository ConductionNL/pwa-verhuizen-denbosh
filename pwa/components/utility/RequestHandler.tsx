import {useUserContext} from "../context/userContext";

export function createRequest(user, context) {
  console.log(context);
  console.log(user);

  fetch(context.apiUrl + '/gateways/vrc/requests', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      organization: "https://conduction.demodam.nl/api/v1/wrc/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43",
      submitters: [
        {
          bsn: user.bsn
        }
      ]
    })
  })
    .then(response => response.json())
    .then(data => console.log(data));

  return;

  return null;
}

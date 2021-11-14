export function getPositionName (lat, long) {const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`;
return fetch(urlPosition).then(response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}).then(data => {return data.results[0].components.city || data.results[0].components.country})
}


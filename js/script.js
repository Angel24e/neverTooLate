const breweryApi = `https://api.openbrewerydb.org/breweries`

fetch(breweryApi)
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
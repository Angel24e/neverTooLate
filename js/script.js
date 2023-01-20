const breweryApi = `https://api.openbrewerydb.org/breweries`

const searchButton = document.querySelector(".handleSearchButton");

const searchInput = document.getElementById("brewery")

function searchForBrewery() {
  event.preventDefault();
  console.log(searchInput.value)
  fetch(breweryApi)
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    displayBreweryLocation(data);
  });
}

function displayBreweryLocation(data) {
  console.log("Current Brewery Data: ", data);
}

searchButton.addEventListener("click", searchForBrewery)
const dropdown = document.getElementById("brewery");

const randomRecipe = document.querySelector(".randomRecipe");

const breweryName = document.querySelector(".name");

const breweryAddress = document.querySelector(".address");

const breweryNumber = document.querySelector(".phoneNumber");

const breweryWebsite = document.querySelector(".website_url");

function searchForBrewery(event) {
  event.preventDefault();
  fetch(`https://api.openbrewerydb.org/breweries?by_type=${dropdown.value}&per_page=10`)
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    displayBreweryLocation(data[Math.floor(Math.random() * 10)]);
  });
}

function displayBreweryLocation(data) {
  console.log("Current Brewery Data: ", data);
  breweryName.textContent = "Name: " + data.name;
  breweryAddress.textContent = "Address: " + data.street + ", " + data.city + ", " + data.state; 
  breweryNumber.textContent = "Phone Number: " + data.phone;
  breweryWebsite.textContent = "Website Url: " + data.website_url;
}

dropdown.addEventListener("change", searchForBrewery);

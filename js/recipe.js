const something = document.querySelector(".something");

const drinksApi = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

function getRandomRecipe() {
 fetch(drinksApi)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
}

getRandomRecipe();
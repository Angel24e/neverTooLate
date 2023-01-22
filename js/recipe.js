const something = document.querySelector(".something");

const drinksApi = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

const drinkTitle = document.querySelector(".drinkTitle");

const drinkCategory = document.querySelector(".drinkCategory");

const drinkInstructions = document.querySelector(".drinkInstructions");

const drinkGlass = document.querySelector(".drinkGlass");

const drinkImage = document.querySelector(".drinkImage");

const drinkIngredients = document.querySelector(".drinkIngredients");

const drinkMeasurements = document.querySelector(".drinkMeasurements");

const favorite = document.querySelector(".favorite");

function getRandomRecipe() {
 fetch(drinksApi)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    randomRecipe(data);
  })
}

function randomRecipe(data) {
  drinkTitle.textContent = data.drinks[0].strDrink;
  drinkCategory.textContent = "Category of Drink: " + data.drinks[0].strCategory;
  drinkInstructions.textContent = "Instructions: " + data.drinks[0].strInstructions;
  drinkGlass.textContent = "Glass of choice: " + data.drinks[0].strGlass;
  drinkImage.innerHTML = "<img src=" + data.drinks[0].strDrinkThumb + ">";
}

getRandomRecipe();

favorite.addEventListener("on")
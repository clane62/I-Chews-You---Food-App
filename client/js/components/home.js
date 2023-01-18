function renderHome() {
  // document.querySelector('#page').innerHTML = ``
  randomRecipe()
}

function randomRecipe() {

  fetch(`https://api.spoonacular.com/recipes/random?apiKey=99a56507b069468ea74c05caf5aac57b`)
    .then(response => response.json())
    .then(response => {
      var food = response.recipes[0]
      document.querySelector('#page').innerHTML = `
      <button class="" onClick="randomRecipe()">Chews Another Recipe</button>

      <section onclick='renderSingleRecipe(event)' class='feature-recipe recipe' data-id='${food.id}'>
        <h2>${food.title}</h2>

        <img src='${food.image}' alt=''>
      </section>
    `})
}
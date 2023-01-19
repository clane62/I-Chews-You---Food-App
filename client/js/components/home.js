function renderHome() {
  // document.querySelector('#page').innerHTML = ``
  randomRecipe()
}

function randomRecipe() {

  fetch(`https://api.spoonacular.com/recipes/random?apiKey=9fb4e2597b3f405291312d55676dd441`)
    .then(response => response.json())
    .then(response => {
      var food = response.recipes[0]
      document.querySelector('#page').innerHTML = `
      <button class="random-button" onClick="randomRecipe()">Chews Another Recipe</button>

      <section onclick='renderSingleRecipe(event)' class='feature-recipe recipe' data-id='${food.id}'>
        <div class="heading">
          <h2>${food.title}</h2>
        <div>
        <img src='${food.image}' alt=''>
      </section>
    `})
}
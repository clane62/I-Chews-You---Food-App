function renderHome() {
    // document.querySelector('#page').innerHTML = ``
    randomRecipe()
}

function randomRecipe() {

    fetch(`https://api.spoonacular.com/recipes/random?apiKey=16157713a2bb48259ac28d6dce7b2976`)
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
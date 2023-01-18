function renderHome() {
  document.querySelector('#page').innerHTML = `

    `
  randomRecipe()

}
function randomRecipe() {

  fetch(`https://api.spoonacular.com/recipes/random?apiKey=9fb4e2597b3f405291312d55676dd441 `)
    .then(response => response.json())
    .then(response => {
      var food = response.recipes[0]

      document.querySelector('#page').innerHTML += `
      <header>
        <h2>${food.title}</h2>
        <button class="" onClick="renderHome()">Chews Another Recipe</button>
        </header>
        <img src='${food.image}' alt=''>
`


    })
}
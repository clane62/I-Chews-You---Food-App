function renderSearch() {
  document.querySelector('#page').innerHTML = `
  <div class="display-image">
    <img class="search-image" src="./css/images/search-image-resized.png" alt="">
  </div>
  <div class="div-form">
    <form action="">
      <input type="text">
      <button class="search-recipe">Search</button>
    </form>
  </div>
  
  <span class="search-results"></span>
  `
  const searchResults = document.querySelector('.search-results')
  const searchButton = document.querySelector('.search-recipe')

  searchButton.addEventListener('click', event => {
    event.preventDefault()
    const searchInput = document.querySelector('input').value
    console.log(searchInput)

    findRecipe(searchInput)
  })
}

function findRecipe(searchInput) {
  fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&apiKey=bd035646064d4151aa2075b5f34bef74`)
    .then(response => response.json())
    .then(searchResults => {
      const searchOutput = searchResults.results

      console.log(searchOutput)
      renderSearchList(searchOutput)

    })
}

function findRecipeById(recipeId) {
  fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=bd035646064d4151aa2075b5f34bef74`)
    .then(response => response.json())
    .then(searchResult => {
      return searchResult
    })
}
// function renderSearchList(searchOutput) {
//     document.querySelector('#page').innerHTML = `
//     <section class='search-rslt'>
//       ${renderSearchResults(searchOutput)}
//     </section>
//   `
// }

// function renderSearchResults(searchOutput) {
//     return searchOutput.map(output => `
//    <section onClick='renderSingleRecipe(event)' class="recipe" data-id='${output.id}'>
//       <h2>${output.title}</h2>
//       <img src='${output.image}' alt=''>
//    </section>
//   `).join(" ")
// }

function renderSearch() {
  document.querySelector('#page').innerHTML = `
  <form action="">
    <input type="text">
    <button class="search-recipe">Search</button>
  </form>
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

  function findRecipe(searchInput) {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&${ENV['SPOONACULAR_API_KEY']}`)
      .then(response => response.json())
      .then(response => {
        const searchOutput = response.results

        console.log(searchOutput)
        renderSearchList(searchOutput)

      })
  }
}

function renderSearchList(searchOutput) {
  document.querySelector('#page').innerHTML = `
    <section class='search-rslt'>
      ${renderSearchResults(searchOutput)}
    </section>
  `
}

function renderSearchResults(searchOutput) {
  return searchOutput.map(output => `
   <section onClick='renderSingleRecipe(event)' class="recipe" data-id='${output.id}'>
      <h2>${output.title}</h2>
      <img src='${output.image}' alt=''>
   </section>
  `).join(" ")
}
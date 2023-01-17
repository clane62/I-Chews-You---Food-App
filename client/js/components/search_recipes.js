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
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&apiKey=247841a848f5433ba355a9d1cb38b293`)
      .then(response => response.json())
      .then(response => {
        const searchOutput = response

        searchResults.innerHTML = `
            <h2>${searchOutput.results[0].title}</h2>
            <h2>${searchOutput.results[1].title}</h2>
            <h2>${searchOutput.results[2].title}</h2>
  
          `
      })
  }
}


function renderSearchList(searchResults) {
    document.querySelector('#page').innerHTML = `
      <section class='search-rslt'>
        ${renderSearchResults(searchResults)}
      </section>
    `
}
  
function renderSearchResults(searchResults) {
    return searchResults.map(recipe => `
        <section onClick='renderSingleRecipe(event)' class="recipe" data-id='${recipe.id}'>
            <h2 class='recipe-title'>${recipe.title}</h2>
            <img src='${recipe.image}' alt=''>
        </section>
    `).join(" ")
}
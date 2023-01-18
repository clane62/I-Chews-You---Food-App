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
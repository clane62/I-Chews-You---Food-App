const state = {
  // populate with other key value pairs
  reviews: [],
  loggedInUserName: null
}

// PLACEHOLDER CODE

// fetch('/api/reviews')
//     .then(res => res.json())
//     .then(reviews => {
//         state.reviews = reviews
//         renderReviewList()
//     })

fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => state.loggedInUserName = userName)

fetch(`https://api.spoonacular.com/recipes/random?apiKey=247841a848f5433ba355a9d1cb38b293`)
  .then(response => response.json())
  .then(response => {
    var food = response.recipes[0]

    document.querySelector('#page').innerHTML = `
    <section class="random-icon">
    <button class="  random-button" onClick="randomRecipe()">
    Chews Another Recipe</button>
    </section>
    <div class="break"> </div>
    <section onclick='renderSingleRecipe(event)' class='feature-recipe' data-id='${food.id}'>
    <img src='${food.image}' alt=''>
    <div class="heading">
      <h2>${food.title}</h2>
    </div>
    </section>
    `
  })
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

fetch(`https://api.spoonacular.com/recipes/random?apiKey=16157713a2bb48259ac28d6dce7b2976`)
  .then(response => response.json())
  .then(response => {
    var food = response.recipes[0]

    document.querySelector('#page').innerHTML = `
    <button class="random-button" onClick="randomRecipe()">Chews Another Recipe</button>

    <section onclick='renderSingleRecipe(event)' class='feature-recipe recipe' data-id='${food.id}'>
      <div class="heading">
        <h2>${food.title}</h2>
      <div>
      <img src='${food.image}' class="feature-image" alt=''>
    </section>
    `
  })
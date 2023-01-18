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

// fetch('/api/sessions')
//     .then(res => res.json())
//     .then(userName => state.loggedInUserName = userName)

fetch(`https://api.spoonacular.com/recipes/random?apiKey=9fb4e2597b3f405291312d55676dd441 `)
  .then(response => response.json())
  .then(response => {
    var food = response.recipes[0]

    document.querySelector('#page').innerHTML += `
    <h2>Welcome to I Chews You</h2>
    <header>
      <h2>${food.title}</h2>
      <button class="" onClick="renderHome()">Chews Another Recipe</button>
      </header>
      <img src='${food.image}' alt=''>

`
  })
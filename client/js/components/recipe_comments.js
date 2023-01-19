function renderSingleRecipe(event) {
    const recipeButton = event.target
    const recipeDOM = recipeButton.closest('.recipe')
    const recipeDataId = recipeDOM.dataset.id

    // search spoonacular API for detailed information about specific recipe
    // store the results in an object
    var recipeObject = findRecipeById(recipeDataId)

    fetch(`https://api.spoonacular.com/recipes/${recipeDataId}/information?apiKey=9fb4e2597b3f405291312d55676dd441`)
    .then(response => response.json())
    .then(renderComments(recipeDataId))
    .then(searchResult => {
      renderRecipeDetail(searchResult)
    })
}

function renderRecipeDetail(recipeObject) {
    // formatting of info below to be updated based on agreed information to display
    document.querySelector('#page').innerHTML = `
        <section class='recipe-info'>
            <h2>${recipeObject.title}</h2>
            <img src='${recipeObject.image}' alt=''>
            <p>${recipeObject.summary}</p>

            <ul>
                <li>Servings: ${recipeObject.servings}</li>
                <li>Time: ${recipeObject.readyInMinutes} minutes</li>
            </ul>
            
            <section class='ingredients'>
                <h3>Ingredients:</h3>
                <ul>
                    ${renderExtendedIngredients(recipeObject.extendedIngredients)}
                </ul>
            </section>

            <section class='directions'>
                <h3>Directions:</h3>
                <p>${recipeObject.instructions}</p>
            </section>
        </section>

        <section class='comment-sctn'>
            <h3>Comments:</h3>
            <div onClick='renderAddComment(${recipeObject.id})' class='comment-btn'>
                <p>Add Comment</p>
                
            </div>
            <div class='new-comment'></div>
            
            <div class='existing-comments'>
                ${renderReviewList()}
            </div>
        </section>
    `
}

function renderExtendedIngredients(ingredients) {
    return ingredients.map(ingredient =>`
        <li>${ingredient.original}</li>
    `).join(' ')
}

function renderComments(recipeId) {
    // find comments in db by recipe id and store as variable
    // var recipeComments = findRecipeDB(recipeId)
    
     return fetch(`/api/comments/${recipeId}`)
        .then(res => res.json())
        .then(reviews => {
            state.reviews = reviews
        })
}

function renderReviewList() {
    return state.reviews.map(review => `
    <div class='review'>
        <h4>${review.username}</h4>
        <p>${review.rating}</p>
        <p>${review.review}</p>
    </div>
    `).join('')
}
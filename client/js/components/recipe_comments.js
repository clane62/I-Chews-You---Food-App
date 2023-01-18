function renderSingleRecipe(event) {
    const recipeButton = event.target
    const recipeDOM = recipeButton.closest('.recipe')
    const recipeDataId = recipeDOM.dataset.id

    // search spoonacular API for detailed information about specific recipe
    // store the results in an object
    var recipeObject = findRecipeById(recipeDataId)

    // formatting of info below to be updated based on agreed information to display
    // document.querySelector('#page').innerHTML = `
    //     <section class='recipe-info>
    //         <h2>${recipeObject.title}</h2>
    //         <img src='${recipeObject.image}' alt=''>

    //         <ul>
    //             <li>${recipeObject.servings}</li>
    //             <li>${recipeObject.time}</li>
    //         </ul>
            
    //         <p>${recipeObject.ingredients}</p>
    //         <p>${recipeObject.directions}</p>
    //     </section>

    //     <section class='comment-sctn'>
    //         ${renderComments(recipeObject.recipeID)}
    //     </section>
    // `
}

function renderComments(recipeId) {
    // find comments in db by recipe id and store as variable
    var recipeComments = findRecipeDB(recipeId)
    
//     fetch(`/api/treasures/${treasureId}`, {
//         method: 'DELETE'
//       })
//         .then(() => {
//           // removing just that one treasure from my state.treasures
//           state.treasures = state.treasures.filter(t => t.id != treasureId)
//           renderTreasureList()
//         })
}

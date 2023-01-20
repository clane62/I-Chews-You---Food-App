function renderRecipeLikes(recipeId) {
    fetch(`/api/likes/${recipeId}`)
        .then(res => res.json())
        .then(numLikes => {
            state.likes = numLikes
        })
}

function renderAddLike(recipeId) {
    fetch(`/api/likes/${recipeId}`, {
        method: 'POST'
    })
        .then(res => res.json())
        .then(numLikes => {
            state.likes = numLikes
        })

}
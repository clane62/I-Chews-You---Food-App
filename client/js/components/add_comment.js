function renderAddComment() {


    // replace below line with relevant position comments box should go
    document.querySelector('.new-comment').innerHTML = `
        <div class="comment-area">
            <form onSubmit="addComment(event)">
            
                <label for="">Recipe ID</label>
                <input type="text" name="recipeId" value="${recipeObject.id}">
            
                <fieldset>
                    <label for="">Rating</label>
                    <input type="text" name="rating" value size="50" maxlength="50">
                </fieldset>

                <fieldset>
                    <label for="">Comment</label>
                    <textarea name="comment" id="" cols="50" rows="10"></textarea>
                </fieldset>

                <button>Add comment</button>
            </form>
        </div>
    `
}

// Need to pass in username to comment data

function addComment(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        // confirm what function to call here
        .then(res => {
            if (res.error) {
                renderLogIn()
                renderError(res.error)
            } else {
                renderSingleRecipe(event)
            }
        })
}

// consider rendering an error above the comment box

function renderError(errorMessage) {
    document.querySelector('#page').innerHTML = `<h2 style='color: red;'>${errorMessage}</h2>` + document.querySelector('#page').innerHTML
}
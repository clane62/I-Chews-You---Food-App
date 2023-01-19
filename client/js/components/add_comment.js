function renderAddComment(recipeId) {


    // replace below line with relevant position comments box should go
    document.querySelector('.new-comment').innerHTML = `
        <div class="comment-area">
            <form onSubmit="addComment(event)">
            
                <label for="">Recipe ID</label>
                <input type="text" name="recipeId" value="${recipeId}">
        
                <label for="rating-options">Rating</label>
                <select name="rating-options" id="rating-options">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <label for="">Comment</label>
                <textarea name="comment" id="" cols="50" rows="10"></textarea>

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
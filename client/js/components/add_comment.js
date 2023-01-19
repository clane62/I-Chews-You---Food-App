// =======================================================================
// ADD COMMENTS
// =======================================================================

function renderAddComment(recipeId) {

    // replace below line with relevant position comments box should go
    document.querySelector('.new-comment').innerHTML = `
        <div class="comment-area">
            <form onSubmit="addComment(event)">
            
                <label for="">Recipe ID</label>
                <input type="text" name="recipeId" value="${recipeId}">
        
                <fieldset>
                    <label for="ratings">Rating</label>
                    <select name="ratings" id="ratings">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
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
            }
            else {
                removeAddComment()
                // refresh page tbc
                // renderComments(recipeDataId)
                document.querySelector('.existing-comments').innerHTML = renderReviewList()
            }
        })
}

// consider rendering an error above the comment box

function renderError(errorMessage) {
    document.querySelector('#page').innerHTML = `<h2 style='color: red;'>${errorMessage}</h2>` + document.querySelector('#page').innerHTML
}

function removeAddComment() {
    document.querySelector('.new-comment').innerHTML = `
        <p>Reload to see comments</p>
    `
}

// =======================================================================
// EDIT COMMENTS
// =======================================================================

// placeholder code

function renderEditComment(recipeId, reviewId) {

    // replace below line with relevant position comments box should go
    document.querySelector('.new-comment').innerHTML = `
        <div class="comment-area">
            <form onSubmit="editComment(event)">
            
                <label for="">Review ID</label>
                <input type="text" name="reviewId" value="${reviewId}">
            
                <label for="">Recipe ID</label>
                <input type="text" name="recipeId" value="${recipeId}">
        
                <fieldset>
                    <label for="ratings">Rating</label>
                    <select name="ratings" id="ratings">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label for="">Comment</label>
                    <textarea name="comment" id="" cols="50" rows="10"></textarea>
                </fieldset>

                <button>Edit comment</button>
            </form>
        </div>
    `
}

function editComment(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/api/comments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        // confirm what function to call here
        .then(res => {
            if (res.error) {
                renderLogIn()
                renderError(res.error)
            }
            else {
                removeAddComment()
                // refresh page tbc
                // renderComments(recipeDataId)
                document.querySelector('.existing-comments').innerHTML = renderReviewList()
            }
        })
}

// =======================================================================
// DELETE COMMENTS
// =======================================================================

function deleteReview(event) {
    const deleteBtn = event.target
    const recipeDOM = deleteBtn.closest('.review')
    const reviewId = recipeDOM.dataset.id

    fetch(`/api/comments/${reviewId}`, {
        method: 'DELETE'
    })
        .then(() => {
            state.reviews = state.reviews.filter(r => r.review_id != reviewId)
            // think of way to refresh page
            document.querySelector('.existing-comments').innerHTML = renderReviewList()

        })
}
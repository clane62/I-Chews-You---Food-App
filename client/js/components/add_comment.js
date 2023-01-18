function renderAddComment() {


    // replace below line with relevant position comments box should go
    document.querySelector('#page').innerHTML = `
        <div class="comment-area">
            <form>
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
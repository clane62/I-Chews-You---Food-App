function renderLogIn() {
    document.querySelector('#page').innerHTML = `
      <section class='log-in'>
      <div class="login-center">
        <form onSubmit="login(event)">
          <h2>Login:</h2>
          
            <label for="">Email: </label>
            <input type="text" name="email" value size="30" maxlength="50">
          
            <br>
        
            <label for="">Password: </label>
            <input type="password" name="password" value size="30" maxlength="50">
          
            <br>
          <button>Login</button>
          </div>
        </form>
      </section>
    `
}

function login(event) {
    event.preventDefault()
    const form = event.target

    const data = Object.fromEntries(new FormData(form))

    fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                renderLogin()
                renderError(res.error)
            } else {
                state.loggedInUserName = res
                renderNavBtn()
                renderHome()
            }
        })
}


// error message to be styled later
function renderError(errorMessage) {
    document.querySelector('#page').innerHTML =
        `<h2 style='color: red;'>${errorMessage}</h2>` +
        document.querySelector('#page').innerHTML
}

function logOut() {
    fetch('/api/sessions', {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => state.loggedInUserName = res)
        .then(() => renderNavBtn())
}
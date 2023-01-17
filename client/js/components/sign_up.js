function renderSignUp() {
    document.querySelector('#page').innerHTML = `
    <section class='sign-up'>
        <form onSubmit="signUp(event)">
            <h2>Sign Up:</h2>

            <fieldset>
                <label for="">First Name: </label>
                <input type="text" name="first_name" required>
            </fieldset>

            <fieldset>
                <label for="">Last Name: </label>
                <input type="text" name="last_name" required>
            </fieldset>

            <fieldset>
                <label for="">Username: </label>
                <input type="text" name="username" required>
            </fieldset>

            <fieldset>
                <label for="">Email: </label>
                <input type="text" name="email" required>
            </fieldset>
            
            <fieldset>
                <label for="">Password: </label>
                <input type="password" name="password" required>
            </fieldset>
            
            <fieldset>
                <label for="">Confirm Password: </label>
                <input type="password" name="confirm_password" required>
            </fieldset>

            <button>Sign Up</button>
        </form>
    </section>
    `
}

function signUp(event) {
    event.preventDefault()
    const form = event.target
  
    // converts form data into an object:
    const data = Object.fromEntries(new FormData(form))
  
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => renderHome())
  }
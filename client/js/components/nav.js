function renderNavBtn() {
    renderSignUpBtn()
    renderLogInBtn()
    renderLogOutBtn()
}

function renderSignUpBtn() {
    if (state.loggedInUserName === null) {
        document.querySelector('.sign-up-outer').innerHTML = `
            <li class="material-symbols-outlined sign-up-link" onClick="renderSignUp()">person_add</li>
            <div class="signup-div" onClick="renderSignUp()">
                SIGN UP
            </div>
        `
    } else {
        document.querySelector('.sign-up-outer').innerHTML = ""
    }
}

function renderLogInBtn() {
    if (state.loggedInUserName === null) {
        document.querySelector('.login-outer').innerHTML = `
        <div class="login-outer">
            <li class="material-symbols-outlined log-in-link" onClick="renderLogIn()">Login</li>
            <div class="login-div" onClick="renderLogIn()">
                LOG IN
            </div>
        </div>
        `
    } else {
        document.querySelector('.login-outer').innerHTML = ""
    }
}

function renderLogOutBtn() {
    if (state.loggedInUserName !== null) {
        document.querySelector('.logout-outer').innerHTML = `
        <div class="logout-outer">
            <li class="material-symbols-outlined log-out-link" onClick="logOut()">Login</li>
            <div class="logout-div" onClick="logOut()">
                LOG OUT
            </div>
        </div>
        `
    } else {
        document.querySelector('.logout-outer').innerHTML = ""
    }
}
function validateLogin() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.innerHTML = "Please enter all fields.";
        return false;
    }

    if (password.length < 6) {
        message.innerHTML = "Password must contain at least 6 characters.";
        return false;
    }

    message.innerHTML = "Login successful!";
    return false;
}
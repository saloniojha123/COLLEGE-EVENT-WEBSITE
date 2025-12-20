document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".form");
    const username = document.querySelector("input[name='username']");
    const password = document.querySelector("input[name='password']");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop form from submitting

        // Trim input values
        const userValue = username.value.trim();
        const passValue = password.value.trim();

        // Validation
        if (userValue === "") {
            alert("Please enter your username");
            username.focus();
            return;
        }

        if (passValue === "") {
            alert("Please enter your password");
            password.focus();
            return;
        }

        // Dummy login check (for mini project)
        if (userValue === "admin" && passValue === "admin123") {
            alert("Login successful!");
            window.location.href = "index.html"; // redirect after login
        } else {
            alert("Invalid username or password");
        }
    });

});
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    // Form ko submit hone se rokna
    event.preventDefault();

    // Input values lena
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const errorMessage = document.getElementById("errorMessage");

    // Password check
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    // Password length check
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }

    // User object banana
    const user = {
        name: name,
        email: email
    };

    // User ko browser ke localStorage me save karna
    localStorage.setItem("user", JSON.stringify(user));

    // Login status save karna
    localStorage.setItem("isLoggedIn", "true");

    // Dashboard par redirect
    window.location.href = "dashboard.html";
});
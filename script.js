const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const loginError =
            document.getElementById("loginError");


        // Registered user ko localStorage se get karo
        const savedUser =
            JSON.parse(localStorage.getItem("user"));


        // Check user exist karta hai ya nahi
        if (!savedUser) {

            loginError.textContent =
                "No account found. Please sign up first.";

            return;
        }


        // Email & Password check
        if (
            email === savedUser.email &&
            password === savedUser.password
        ) {

            // Login status
            localStorage.setItem("isLoggedIn", "true");

            // Dashboard par redirect
            window.location.href = "dashboard.html";

        } else {

            loginError.textContent =
                "Invalid email or password.";

        }

    });

}
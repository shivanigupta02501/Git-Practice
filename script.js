// =========================
// SIGNUP
// =========================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const errorMessage =
            document.getElementById("errorMessage");


        // Password match
        if (password !== confirmPassword) {

            errorMessage.textContent =
                "Passwords do not match!";

            return;
        }


        // Password length
        if (password.length < 6) {

            errorMessage.textContent =
                "Password must be at least 6 characters!";

            return;
        }


        // User object
        const user = {
            name: name,
            email: email,
            password: password
        };


        // Save user
        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );


        console.log("User saved:", user);

        alert("Registration successful!");


        // Login page
        window.location.href = "login.html";

    });
}



// =========================
// LOGIN
// =========================

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


        // Saved user
        const savedUser =
            JSON.parse(localStorage.getItem("user"));


        console.log("Saved User:", savedUser);
        console.log("Login Email:", email);


        // User registered nahi hai
        if (!savedUser) {

            loginError.textContent =
                "No account found. Please register first.";

            return;
        }


        // Email and password check
        if (
            email === savedUser.email &&
            password === savedUser.password
        ) {

            console.log("Login successful");


            // Login status
            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            // Dashboard
            window.location.href =
                "dashboard.html";

        } else {

            loginError.textContent =
                "Invalid email or password!";

        }

    });

}
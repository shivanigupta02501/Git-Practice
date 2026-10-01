const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Signup form submitted");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const errorMessage =
            document.getElementById("errorMessage");


        // Password check
        if (password !== confirmPassword) {

            errorMessage.textContent =
                "Password does not match!";

            return;
        }


        // Password length
        if (password.length < 6) {

            errorMessage.textContent =
                "Password must be at least 6 characters!";

            return;
        }


        // User data
        const user = {
            name: name,
            email: email,
            password: password
        };


        // Save data in localStorage
        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );


        console.log("User saved:", user);

        alert("Signup successful!");


        // Go to login page
        window.location.href = "login.html";

    });

}
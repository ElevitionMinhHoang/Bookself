document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const logoutBtn = document.getElementById("logout-btn");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            // Simulate login
            const user = {
                name: "Nguyễn Văn An",
                email: "user@email.com",
            };
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "account.html";
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("user");
            window.location.href = "login.html";
        });
    }

    // Check login status on account page
    if (window.location.pathname.endsWith("account.html")) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            window.location.href = "login.html";
        }
    }
});

function login() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const validPassword = [
        "ai2025",
        "sekolahAI",
        "futureedu",
        "adminAI"
    ];

    if (validPassword.includes(password)) {
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "❌ Password salah! Akses ditolak.";
    }
}

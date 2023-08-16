document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Здесь вы можете добавить логику проверки имени пользователя и пароля.
    // В данном примере, мы просто перенаправляем на главную страницу.
    window.location.href = "home.html"; // Замените "main.html" на вашу главную страницу.
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");

  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Здесь можно добавить логику для обработки данных регистрации.
    // Например, отправку данных на сервер или другую необходимую обработку.

    // После успешной регистрации можно перенаправить пользователя на страницу авторизации.
    window.location.href = "index.html"; // Замените "index.html" на вашу страницу авторизации.
  });
});

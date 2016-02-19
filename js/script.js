var writeusBtn = document.querySelector(".map-contacts .btn");
var writeusForm = document.querySelector(".modal-writeus");
var closeBtn = document.querySelector(".modal-writeus-close");
var userField = document.querySelector("[name=user]");
var emailField = document.querySelector("[name=email]");
var textField = document.querySelector("[name=text]");
var user = localStorage.getItem("user");
var email = localStorage.getItem("email");

// localStorage.clear();

window.addEventListener("keydown", closeWriteusFormByEsc);
writeusForm.addEventListener("submit", submitWriteusForm);
writeusBtn.addEventListener("click", showWriteusForm);
closeBtn.addEventListener("click", closeWriteusForm);

function submitWriteusForm() {
  localStorage.setItem("user", userField.value);
  localStorage.setItem("email", emailField.value);
}

function showWriteusForm() {
  if (user) {
    userField.value = user;
  }

  if (email) {
    emailField.value = email;
  }

  writeusForm.classList.add("modal-writeus-show");

  if (user && email) {
    textField.focus();
  } else if (user) {
    emailField.focus();
  } else {
    userField.focus();
  }
}

// TODO: Можно сделать один обработчик на открытие и закрытие формы
function closeWriteusForm() {
  writeusForm.classList.remove("modal-writeus-show");
}

function closeWriteusFormByEsc(event) {
  if (event.keyCode === 27) {
    if (writeusForm.classList.contains("modal-writeus-show")) {
      closeWriteusForm();
    }
  }
}

// TODO: 22 шаг

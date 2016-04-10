var writeusBtn = document.querySelector(".map-contacts .btn");
var writeusForm = document.querySelector(".modal-writeus");
var closeBtn = document.querySelector(".modal-writeus-close");
var userField = document.querySelector("[name=user]");
var emailField = document.querySelector("[name=email]");
var textField = document.querySelector("[name=text]");

if ( checkLocalStorage() ) {
  var user = localStorage.getItem("user");
  var email = localStorage.getItem("email");
}

writeusBtn.addEventListener("click", showWriteusForm);
writeusForm.addEventListener("submit", submitWriteusForm);
closeBtn.addEventListener("click", showHideWriteusForm);
window.addEventListener("keydown", closeWriteusFormByEsc);

function checkLocalStorage() {
  if (window.localStorage) return true;

  return false;
}

function showHideWriteusForm(event) {
  event.preventDefault();

  writeusForm.classList.toggle("modal-writeus-show");
  writeusForm.classList.remove("modal-writeus-error");
}

function showWriteusForm(event) {
  if (user) {
    userField.value = user;
  }

  if (email) {
    emailField.value = email;
  }

  showHideWriteusForm(event);

  if (user && email) {
    textField.focus();
  } else if (user) {
    emailField.focus();
  } else {
    userField.focus();
  }
}

function submitWriteusForm(event) {
  if (!userField.value || !emailField.value || !textField.value) {
    event.preventDefault();

    writeusForm.classList.remove("modal-writeus-error");
    writeusForm.offsetWidth = writeusForm.offsetWidth;
    writeusForm.classList.add("modal-writeus-error");
  }

  if ( checkLocalStorage() ) {
    localStorage.setItem("user", userField.value);
    localStorage.setItem("email", emailField.value);
  }
}

function closeWriteusFormByEsc(event) {
  if (event.keyCode !== 27) return;

  showHideWriteusForm();
}

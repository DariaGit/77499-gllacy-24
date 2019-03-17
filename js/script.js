  var link = document.querySelector(".map-button");
  var popup = document.querySelector(".modal-feedback");
  var ovrl = document.querySelector(".overlay");
  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=feedback-name]");
  var email = popup.querySelector("[name=email-feedback]");
  var message = popup.querySelector("[name=message]");
  var isStorageSupport = true;
  var storage = "";
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    ovrl.classList.add("overlay-show");
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
    login.focus();
  });
  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    ovrl.classList.remove("overlay-show");
    popup.classList.remove("modal-error");
  });
  form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин, пароль и текст сообщения.");
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        ovrl.classList.remove("overlay-show");
        popup.classList.remove("modal-error");
      }
    }
  });
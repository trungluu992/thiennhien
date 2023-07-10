var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var password2 = document.querySelector("#password2");
var checkbox = document.querySelector(".bonus input");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  parent.classList.add("error");
  let small = parent.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  let parent = input.parentElement;
  parent.classList.remove("error");
  parent.classList.add("success");
  let small = parent.querySelector("small");
  small.innerText = "";
}
function checkEmptyError(listInput) {
  let isEmpty = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmpty = true;
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });
  return isEmpty;
}
function checkEmail(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (isEmailError) {
    showError(input, "Email Invalid");
  } else {
    showSuccess(input);
  }
  return isEmailError;
}
function checkLongError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} kí tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Không được nhiều hơn ${max} kí tự`);
    return true;
  }
  showSuccess(input);
  return false;
}
function checkMatchPasswordError(password, confirmPassword) {
  if (password.value.trim() != confirmPassword.value.trim()) {
    showError(confirmPassword, "Mật khẩu không trùng khớp");
    return true;
  }
  return false;
}
function checkBox(input) {
  if (input.checked == false) {
    showError(input, "Bạn cần đồng ý điều này");
    return false;
  }
  showSuccess(input);
  return true;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmpty = checkEmptyError([username, email, password, password2]);
  let isEmailError = checkEmail(email);
  let isUsernameLong = checkLongError(username, 3, 12);
  let isPasswordLong = checkLongError(password, 6, 20);
  let isPasswordMatch = checkMatchPasswordError(password, password2);
  let isChecked = checkBox(checkbox);
  if (
    isEmpty ||
    isEmailError ||
    isUsernameLong ||
    isPasswordLong ||
    isPasswordMatch ||
    isChecked
  ) {
  } else {
  }
});

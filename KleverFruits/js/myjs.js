function hamDropdown() {
 document.querySelector(".noidung_dropdown").classList.toggle("hienThi");
}

let showPassword = true
const ipnElement = document.querySelector('#ipnPassword')
const btnElement = document.querySelector('#btnPassword')

btnElement.addEventListener('click', togglePassword)

function togglePassword() {
  if (showPassword) {
    ipnElement.setAttribute('type', 'text')
    showPassword = false
  } else {
    ipnElement.setAttribute('type', 'password')
    showPassword = true
  }
}

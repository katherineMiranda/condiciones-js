const mainImg = document.getElementById("img-border");

function toggleBorder() {
  mainImg.style.border == ""
    ? (mainImg.style.border = "2px solid red")
    : (mainImg.style.border = "");
}

const quantity01 = document.getElementById("quantity01");
const quantity02 = document.getElementById("quantity02");
const quantity03 = document.getElementById("quantity03");

const alertMsj = document.getElementById("alert-msj");

function sendOrder() {
  const total =
    Number(quantity01.value) +
    Number(quantity02.value) +
    Number(quantity03.value);

  if (total > 10) {
    alertMsj.innerHTML = "Llevas demasiados Stickers";
    alertMsj.style.color = "red";
  } else {
    alertMsj.innerHTML = `Llevas ${total} Sticker(s)`;
    alertMsj.style.color = "green";
  }
}

const digit01 = document.getElementById("digit01");
const digit02 = document.getElementById("digit02");
const digit03 = document.getElementById("digit03");

const passwordMsj = document.getElementById("password-msj");

let password01 = "911";
let password02 = "714";


function sendPassword() {
  let passwordIn = digit01.value + digit02.value + digit03.value;

  if (passwordIn == password01) {
    passwordMsj.innerHTML = "password 1 correcta";
    passwordMsj.style.color = "green";
  } else if (passwordIn == password02) {
    passwordMsj.innerHTML = "password 2 correcta";
    passwordMsj.style.color = "green";
  } else {
    passwordMsj.innerHTML = "password incorrecta";
    passwordMsj.style.color = "red";
  }
}

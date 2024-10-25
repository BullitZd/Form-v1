//SUBMIT FORM
document.getElementById("loginForm").addEventListener("submit", function (event) {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  
});


//MENAMPILKAN & MENYEMBUNYIKAN FORM LOGIN & REGISTER
document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("containerLogin").style.display = "block";
    document.getElementById("containerRegister").style.display = "none";
});

document.getElementById("registerBtn").addEventListener("click", function () {
    document.getElementById("containerLogin").style.display = "none";
    document.getElementById("containerRegister").style.display = "block";
});


document.getElementById("to-daftar").addEventListener("click", function () {
    document.getElementById("containerLogin").style.display = "block";
    document.getElementById("containerRegister").style.display = "none";
});

document.getElementById("to-login").addEventListener("click", function () {
    document.getElementById("containerLogin").style.display = "none";
    document.getElementById("containerRegister").style.display = "block";
});


const btnMasuk = document.querySelector("#masuk");
const btnDaftar = document.querySelector("#daftar");
const inpLoginU = document.querySelector("#username").value;
const inpLoginP = document.querySelector("#password").value;
const regDaftarU = document.querySelector("#regUsername").value;
const regDaftarP = document.querySelector("#regPassword").value;

if (inpLoginU && inpLoginP == "") {
  btnMasuk.style.display = "none";
}
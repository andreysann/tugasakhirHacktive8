function login(){

var txtUsername = document.getElementById('username');
var txtPassword = document.getElementById('password');
var username = txtUsername.value;
var password = txtPassword.value;
username = username.toLowerCase();

if (username=="anna" && password == "1234"){
  window.location.href ="tugasAkhir-halAwal.html";
}else {
  alert("Username atau Password salah!");
}
}

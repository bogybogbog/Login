var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");
var valid1 = document.getElementById("valid1");
var valid2 = document.getElementById("valid2");
var loginBtn = document.getElementById("loginBtn");
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPass = document.getElementById("signupPass");
var singupBtn = document.getElementById("singupBtn");
var loginBtn = document.getElementById("loginBtn");
var Sign_Up = document.getElementById("Sign_Up");
var Sign_In = document.getElementById("Sign_In");
var login = document.getElementById("login");
var signup = document.getElementById("signup");
var userInfo;
if (localStorage.getItem("users") == null) {
  userInfo = [];
} else {
  userInfo = JSON.parse(localStorage.getItem("users"));
}
function signUp() {
  if (isEmpty() == true) {
    var confMsg = document.getElementById("valid4");
    confMsg.classList.replace("d-none", "d-block");
  } else {
    var data = {
      name: signupName.value,
      email: signupEmail.value,
      pass: signupPass.value,
    };
    if (isExist() == true) {
      var confMsg = document.getElementById("valid5");
      confMsg.classList.replace("d-none", "d-block");
    } else {
      userInfo.push(data);
      localStorage.setItem("users", JSON.stringify(userInfo));
      var confMsg = document.getElementById("valid3");
      confMsg.classList.replace("d-none", "d-block");
      console.log(userInfo);
      clear();
    }
  }
}
function isExist() {
  for (var i = 0; i < userInfo.length; i++) {
    if (userInfo[i].email == signupEmail.value) return true;
  }
}
function isEmpty() {
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPass.value == ""
  )
    return true;
  else return false;
}
singupBtn.addEventListener("click", signUp);
function clear() {
  signupName.value = null;
  signupEmail.value = null;
  signupPass.value = null;
}
Sign_Up.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log(e.target);
  signup.classList.replace("d-none", "d-block");
  login.classList.replace("d-block", "d-none");
});

loginBtn.addEventListener("click", function () {
  valedate1(this);
});
function valedate1(e) {
  redex = {
    signupName: /^.{0,}$/i,
    signupEmai: /^.{0,}@(gmail|yahoo)\.com$/i,
    signupPass: /^.{0,}$/i,
  };
  console.log(e);
  console.log(redex[e.id]);
}
function valedate2(e) {
  redex = {
    loginEmail: signupName.value,
    loginPass: signupPass.value,
  };
  console.log(redex[e.id]);
}

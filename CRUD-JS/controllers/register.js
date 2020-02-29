window.addEventListener("load", init);

function init() {
  let submit_btn = document.querySelector("#submitbtn");
  submit_btn.addEventListener("click", register);

  let reset_btn = document.querySelector("#resetbtn");
  reset_btn.addEventListener("click", reset);
}

function register() {
  let userid = document.querySelector("#userid");
  let pwd = document.querySelector("#pwd");

  let userObject = new User(userid.value, pwd.value);
  console.log(userObject);

  //Async ->saving user in database.
  let promise = userOperations.register(userObject);

  promise
    .then(data => {
      alert("Record Saved in Firebase");
      location.href = "login.html";
    })
    .catch(err => {
      console.log("Error in Registering User.. ", err);
    });
}

function reset() {
  let userid = document.querySelector("#userid");
  let pwd = document.querySelector("#pwd");

  userid.value = "";
  pwd.value = "";
}

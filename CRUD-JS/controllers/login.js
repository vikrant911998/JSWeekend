window.addEventListener("load", init);

function init() {
  let submit_btn = document.querySelector("#submitbtn");
  submit_btn.addEventListener("click", login);

  let reset_btn = document.querySelector("#resetbtn");
  reset_btn.addEventListener("click", reset);
}

function login() {
  let userid = document.querySelector("#userid");
  let pwd = document.querySelector("#pwd");

  let userObject = new User(userid.value, pwd.value);

  let firebase_promise = userOperations.login(userid.value);

  firebase_promise.on("value", snapshot => {
    let database_user = snapshot.val();
    console.log(database_user, userObject);

    if (
      database_user.userid == userObject.userid &&
      database_user.password == userObject.password
    ) {
      alert("User Verified");
      location.href = "dashboard.html";
    }
  });
}

function reset() {
  let userid = document.querySelector("#userid");
  let pwd = document.querySelector("#pwd");

  userid.value = "";
  pwd.value = "";
}

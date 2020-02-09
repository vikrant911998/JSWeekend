window.addEventListener('load',init);

function init(){
    let submit = document.querySelector('#submitbtn');
    submit.addEventListener('click',register);

    let resetbtn = document.querySelector('#resetbtn');
    resetbtn.addEventListener('click',reset);
}

function initLogin(){
    let submitLogin = document.querySelector('#submitLogin');
    submitLogin.addEventListener('click',login);

    let resetLogin = document.querySelector('#resetLogin');
    resetLogin.addEventListener('click',reset);
}

function login(){
    console.log('Inside Login Function');

    
}

function register(){
    console.log('Inside Register Function');
    let userid = document.querySelector('#userid');
    let pwd = document.querySelector('#pwd');

    let userObject = new User(userid.value,pwd.value);
    //database save




    let loginDiv = document.querySelector('#login');
    let registerDiv = document.querySelector('#register');

    registerDiv.style.display = "none";
    loginDiv.style.display = "block";
    initLogin();
}


function reset(){
    console.log('Inside Reset Function');
    let userid = document.querySelector('#userid');
    let pwd = document.querySelector('#pwd');

    userid.value = "";
    pwd.value = "";
}
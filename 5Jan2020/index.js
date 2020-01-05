// var div = document.querySelector('#div_1');

// div.innerHTML = "";
// changeDiv();

createDiv();

function createDiv(){
    // console.log(document.getElementById('body'));
    let body = document.querySelector('#body');
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = 'INSIDE DIV';
    h1.setAttribute('id','first');
    h1.style.color = 'blue';
    div.appendChild(h1);
    div.style.border = '20px dashed green';
    body.appendChild(div);


}










// CSS PROPERTIES
// function changeDiv(){
//     var div = document.querySelector('#div_1');
//     // console.log(div);
//     // div.className = 'red';
//     div.style.height = "500px";
//     div.style.width = '50%';
//     div.style.border = '20px dotted green';
//     div.style.padding = '10px';

// }





// CLASSNAME AND CLASSLIST
// function changeDiv(){
//     var div = document.querySelector('#div_1');

//     div.className = 'red';
//     // div.className = "alert-primary text-center "
//     // div.className = "alert-primary";
//     // div.className = "text-center";
//     // div.classList.add('text-center');
//     // div.classList.remove('text-center');
// }

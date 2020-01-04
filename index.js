window.addEventListener('load',init);

function init(){
    var expression = document.querySelector('#expr');
    var btns = document.querySelector('#btns');
    createButton(btns,expression);

    // var calculate = document.querySelector('#calc');
    // calculate.addEventListener('click',function(){
    //     calc(expression);
    // });

}

function calc(expression){
    expression.value = eval(expression.value);
}


function createButton(btns,expression){
    for(let i=0;i<=9;i++){
        var btn = document.createElement('button');
        btn.className = "btn btn-success mr-2 p-3";
        btn.value = i;
        btn.innerText = i;
        btn.addEventListener('click',function(){
            expression.value += i;
        });

        btns.appendChild(btn);
    }

}
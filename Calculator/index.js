window.addEventListener('load',init);

// function init(){
//     var expression = document.querySelector('#expr');
//     let buttons = document.querySelectorAll('.num');
//     // console.log(buttons);
//     attachEvent(buttons,expression);
// }

// function attachEvent(buttons,expression){
//     for(let item of buttons){
//         // console.log(item);
//         item.addEventListener('click',()=>{
//             // expression.value = item.innerHTML;
//             expression.value += item.value;
//             // expression.value = item.innerText;
//         });
//     }
// }





function init(){
    var expression = document.querySelector('#expr');
    // expression.addEventListener('change',()=>{
    //     checkOperator(expression);
    // });

    var btns = document.querySelector('#btns');
    createButton(btns,expression);

}

function checkOperator(expression){
    
    let operators = ['+','-','*','/'];
    let characters = expression.value.split('');
    let length = characters.length;

    let last1 = false;
    let last2 = false;
    let lastCharacter;

    for(let item of operators){
        if(characters[length-1] == item){
            last1 = true;
        }
        if(characters[length-2] == item){
            last2 = true;
        }
    }

    if(last1 && last2){
        lastCharacter = characters.pop();
        characters.pop();
        characters.push(lastCharacter);
    }
    
    expression.value = "";
    for(let item of characters){
        expression.value += item;
    }
    
    console.log('CheckOperator Finished.....');
}


function createButton(btns,expression){
    let arr=['+','-','*','=','C','/'];
    let k=0;
    for( let i=9 ; i>=0 ; i-- ){
        
        if(i==6 || i==3 || i==0){
            let btn = document.createElement('button'); 
            let br = document.createElement('br');
            btn.className = "btn btn-warning m-2 p-3";
            btn.value = arr[k];
            btn.innerText = arr[k];
            k++;
            btn.addEventListener('click',function(){
                expression.value += btn.value;
                checkOperator(expression);
            });
            btns.appendChild(btn);
            btns.appendChild(br);
        }

        if(i==0){
            let btn = document.createElement('button'); 
            
            btn.className = "btn btn-warning m-2 p-3";
            btn.value = arr[k];
            btn.innerText = arr[k];
            k++;
            btn.addEventListener('click',function(){
                expression.value = eval(expression.value);
                checkOperator(expression);
            });
            btns.appendChild(btn);
            
        }

        let btn = document.createElement('button');
        btn.className = "btn btn-success m-2 p-3";
        btn.value = i;
        btn.innerText = i;
        btn.addEventListener('click',function(){
            expression.value += i;
            checkOperator(expression);
        });
        btns.appendChild(btn);

    }

    while(k<arr.length){
        let btn = document.createElement('button'); 
            
        btn.className = "btn btn-warning m-2 p-3";
        btn.value = arr[k];
        btn.innerText = arr[k];
        k++;
        btn.addEventListener('click',function(){
            if(btn.value == 'C'){
                expression.value = "";
            }
            else{
                expression.value += btn.value;
                checkOperator(expression);
            }
            
        });
        btns.appendChild(btn);
    }
}

function evaluate(expression){
    expression.value = eval(expression.value);
}

function clear(expression){
    expression.value = "";
}
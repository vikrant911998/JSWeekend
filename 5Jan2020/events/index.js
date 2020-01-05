window.onload = eventHandle;


function onChange(){
    console.log('Inside On Change');
}



// eventHandle();

function eventHandle(){

    let div = document.getElementById('div1');
    // div.onscroll = onChange;
    div.addEventListener('scroll',onChange);





    // let input = document.getElementsByTagName('input')[0];
    // let input1 = document.getElementsByTagName('input')[1];
    // let input2 = document.getElementsByTagName('input')[2];
    
    
    
    
    
    
    
    // console.log(input);
    // console.log(input1);
    // console.log(input2);


}
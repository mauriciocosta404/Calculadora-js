'use strict'

const buttons=document.querySelectorAll(".button");

buttons.forEach((item)=>{

    item.addEventListener('click',(event)=>{
        inserir(item.value);
    })
})

function inserir(value) {
    if(value==="C"){
        clear();
    }
    else if(value==="<"){
        back();
    }
    else if(value==="="){
        calculate();
    }
    else{
         let result=document.querySelector("#result").innerHTML+=value;
    }
}

function clear() {
    document.querySelector("#result").innerHTML="";
}

function back() {
    let number=document.querySelector("#result").innerHTML;

    document.querySelector("#result").innerHTML=number.substring(0,number.length-1);
}

function calculate(){
    let result=document.querySelector("#result").innerHTML;

    if(result){
        document.querySelector("#result").innerHTML=eval(result);
    }
}

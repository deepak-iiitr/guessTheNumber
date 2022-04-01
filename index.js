'use strict';


// int randomNumber=(Math.random()*20)+1;
let randomNumber=Math.floor(Math.random()*20 + 1);

console.log(randomNumber);



document.querySelector('.check').addEventListener('click',function(){
    const guess=document.querySelector('.guess').value;
    let score=document.querySelector('.crntScore').innerHTML;
    let highScore=document.querySelector('.hScore').innerHTML;
    console.log(highScore,typeof highScore);
    console.log(score,typeof score);
    if(!guess){
        document.querySelector('.crntRxn').textContent="No Input!!";
    }
    else if(guess<0 || guess>20){
        document.querySelector('.crntRxn').textContent="Invalid Input!!";
    }
    else if(guess==randomNumber){
        document.querySelector('.crntRxn').textContent="Correct Guess!!";
        score=Number(score)-1;
        // document.getElementsByTagName("body")[0].style.backgroundColor=WebGLSampler;
        document.body.style.backgroundColor = "green";
        document.querySelector('.randomNumber').innerHTML=randomNumber;
        if(Number(highScore)<Number(score)){
            highScore=score;
        }
    }
    else if(guess<randomNumber){
        document.querySelector('.crntRxn').textContent="Too Low!!";
        score=Number(score)-1;
    }
    else if(guess>randomNumber){
        document.querySelector('.crntRxn').textContent="Too High!!";
        // Number(score)=Number(score)+1;
        score=Number(score)-1;
        console.log(score);
    }
    document.querySelector('.guess').value="";
    document.querySelector('.crntScore').innerHTML=score;
    document.querySelector('.hScore').innerHTML=highScore;
    
});

document.querySelector('.again').addEventListener('click',function(){
    randomNumber=Math.floor(Math.random()*20 + 1);
    document.querySelector('.crntScore').innerHTML=20;
    document.querySelector('.crntRxn').textContent="Start Guessing....!!!";
    document.body.style.backgroundColor = "black";
    document.querySelector('.randomNumber').innerHTML="?";
} )
// console.log(document.querySelector('.guess').value);
// document.querySelector('.leftBox2').textContent=23;
// document.getElementByClass("check").addEventListener("click", function(){ alert("Hello World!"); });
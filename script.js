//getting dom ellemnts and random number var
const form=document.querySelector("form");
const guessInput=document.getElementById("guess-input");
const randomNumber=Math.floor(Math.random()*100)+1;
const attemptsDisplay=document.getElementById("attempts-text");
const statusDisplay=document.getElementById("status-text");
const attemptsMessage=document.getElementById("attemptsP");
//vars for sotring the number that the user enterd and the attempts
let submittedNumber;
let attempts=10;

// the real work

//restart button listener
document.getElementById("restart-btn").addEventListener("click",function(){
    location.reload();
})

console.log(randomNumber);//debuging step
form.addEventListener("submit",function(event){
    event.preventDefault();

    if(attempts===0) return;
    submittedNumber=Number(guessInput.value);

    if(submittedNumber>100 || submittedNumber<1){
        statusDisplay.style.color='darkred';
        statusDisplay.innerHTML='! your number should be between 1 and 100';

    }
    else if(submittedNumber <randomNumber){
        statusDisplay.style.color='green';
        statusDisplay.innerHTML='&uarr;HIEGHR';
        if(attempts>0){
            attempts--;
        }
        attemptsDisplay.textContent=attempts;
    }
    else if(submittedNumber>randomNumber){
        statusDisplay.style.color='red';
        statusDisplay.innerHTML='&darr;LOWER';
        if(attempts>0){
            attempts--;
        }
        attemptsDisplay.textContent=attempts;

    }
    else if(submittedNumber===randomNumber){
        statusDisplay.style.color='#4e46e5';
        statusDisplay.innerHTML='&#127881; YOU HAVE DONE IT';
        document.getElementById("restart-btn").style.display="block";
        return;
    }
    if(attempts===0){
        attemptsMessage.style.color='red';
        attemptsMessage.textContent=`\u2620 GAME OVER`;
        document.getElementById("restart-btn").style.display="block";

    }
    guessInput.value="";
    console.log(submittedNumber);//debugin step
    
});
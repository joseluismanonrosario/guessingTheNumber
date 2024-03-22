let userInput=document.getElementById("input-field");
let checkBtn=document.getElementById("check-button");
let messageBox=document.getElementById("messages");

checkBtn.addEventListener('click',guessChecker);

userInput.addEventListener('keydown',(e)=>{
    if(e.key==='Enter' ){
        guessChecker();
    }
});

function guessChecker(){
    let userGuess=userInput.value;
    let finalMessage=(`Your Guess is ${userGuess}`);
    messageBox.innerText=finalMessage;
    clearUserInput();
}

function clearUserInput(){
    userInput.value="";
}



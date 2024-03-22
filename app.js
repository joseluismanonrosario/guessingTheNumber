let userInput=document.getElementById("input-field");
let checkBtn=document.getElementById("check-button");
let messageBox=document.getElementById("messages");
let blinkingMessage=document.getElementsByClassName("blink");
let subtitleMessage=document.getElementById("welcomeSubtitle");

checkBtn.addEventListener('click',guessChecker);

userInput.addEventListener('keydown',(e)=>{
    if(e.key==='Enter' ){
        guessChecker();
    }
});

function guessChecker(){
    let userGuess=userInput.value;
    let finalMessage=(`Your Guess is ${userGuess}`);
    subtitleMessage.style.opacity=0;
    setMessages(finalMessage);
    clearUserInput();
}

function setMessages(message){
    messageBox.innerText=message;
}

function clearUserInput(){
    userInput.value="";
}


setInterval(function() {
    blinkingMessage[0].style.opacity = (blinkingMessage[0].style.opacity == 0 ? 1 : 0);
}, 500);

function initGame(){
    setMessages("");
}

initGame();
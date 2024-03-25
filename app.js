const userInput=document.getElementById("input-field");
const checkBtn=document.getElementById("check-button");
const messageBox=document.getElementById("messages");
const blinkingMessage=document.getElementsByClassName("blink");
const subtitleMessage=document.getElementById("welcomeSubtitle");
let secretNumber;

checkBtn.addEventListener('click',guessChecker);

userInput.addEventListener('keydown',(e)=>{
    if(e.key==='Enter' ){
        guessChecker();
    }
});

function guessChecker(){
    let userGuess=userInput.value;
    subtitleMessage.style.opacity=0;
    setMessages(evaluateEntry(userGuess));
    clearUserInput();
}

function evaluateEntry(theNumber){
    if (theNumber == secretNumber){
        return "Congratulations! You got it right.";
    } else if (theNumber > secretNumber) {
        return "Too high! Try again."; 
    } else {    
        return "Too low! Try again."; 
    }
}

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * 100) +  1;
}

function  showBlinkingMessage() {
    setInterval(function() {
        blinkingMessage[0].style.opacity = (blinkingMessage[0].style.opacity == 0 ? 1 : 0);
    }, 500);
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
    subtitleMessage.style.opacity=1;
    generateSecretNumber()
}

initGame();
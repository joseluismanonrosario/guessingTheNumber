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
        confettiAction();
        initGame();
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


function confettiAction(){
    let end = Date.now() + (15 * 1000);

    // go Buckeyes!
    let colors = ['#262F6A', '#FF6F04'];

    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
}
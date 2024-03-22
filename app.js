let userInput=document.getElementById("input-field");
let checkBtn=document.getElementById("check-button");

checkBtn.addEventListener('click',guessChecker);

userInput.addEventListener('keydown',(e)=>{
    if(e.key==='Enter' ){
        guessChecker();
    }
});

function guessChecker(){
    let userGuess=userInput.value;
    alert(`Your Guess is ${userGuess}`);
}

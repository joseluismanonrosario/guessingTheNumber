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
    alert(userGuess);
}

const x = ()=>{return Math.floor((Math.random() * 10) + 1)};
alert(x());
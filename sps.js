let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); //for accessing all the 3 divs
const msg=document.querySelector("#msg");
const user=document.querySelector("#userscore");
const comp=document.querySelector("#compscore");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Draw!";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore=userScore+1;
    }
    else{
        msg.innerText=`You Loose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore=compScore+1;
    }
    user.innerText=userScore;
    comp.innerText=compScore;

};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="scissor"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{ //will select all the 3 divs 
    choice.addEventListener("click",()=>{ //after clicking what will happen to that divs
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
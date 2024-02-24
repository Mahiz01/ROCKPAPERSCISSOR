const choices=document.querySelectorAll(".choice");
const userscore=document.querySelector(".score-user");
const computerscore=document.querySelector(".score-compiler")
const message=document.querySelector(".msg")
const reset=document.querySelector(".reset-btn")
let ussc=0;
let cmpscr=0;
const compilerchoice=()=>{
    let options=["rock","paper","scissor"];
    let randchoice=Math.floor(Math.random()*3);
    return options[randchoice];
}

const draw=()=>{
    message.innerText="Round is draw";
    // message.style.backgroundColor=blue;

}

const playgame =(userchoice) =>{
    let comchoice=compilerchoice();
    if(userchoice==comchoice){
        draw();
    }
    let usrwinner=true;
    if(userchoice=="rock"){
        usrwinner=comchoice=="paper"?false:true;
    }
    else if(userchoice=="paper"){
        usrwinner=comchoice=="scissor"?false:true;
    }
    else{
        usrwinner=comchoice=="rock"?false:true;
    }
     showwinner(usrwinner,userchoice,comchoice);
};

const showwinner=(usrwinner,userchoice,comchoice)=>{
    if(usrwinner==false){
        cmpscr++;
        computerscore.innerText = cmpscr;
        message.innerText="lost.!! better luck next time";
        alert(`Lost match..! ${comchoice} beaten ${userchoice}`)
    }
    
    else if(usrwinner==true){
        ussc++;
        userscore.innerText=ussc;
        message.innerText=`Congratulations ${userchoice} beaten ${comchoice}`;
        alert(`Congratulations ${userchoice} beaten ${comchoice}`);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",
    ()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
     
});

const resett=()=>{
    ussc=0;
    cmpscr=0;
    computerscore.innerText = cmpscr;
    userscore.innerText=ussc;

}
reset.addEventListener("click",resett);

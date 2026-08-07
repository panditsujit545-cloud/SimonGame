let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple"," green"];
let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
  if(started == false){
    console.log("game is started");
    started = true;
      levelup();
  }

});

function gameflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}


function userflash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}


function levelup(){
    userSeq= [];
    level++;
    highestScore = Math.max(highestScore,level);
    h2.innerText = `Level ${level}`;

    //random color
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameflash(randombtn);

}

function checkAns(idx){
    // console.log("curr level: ", level);
   
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelup, 1000);
       }
    }else{
        h2.innerHTML =`Game Over! Your score was <b>${level} </b> <br> Press any key to start. <br> Your highest Score is: ${highestScore}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }

}

function btnPress(){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
}
0.

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
     btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq = [];
    level = 0;
}

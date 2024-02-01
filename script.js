const cross = document.querySelector(".cross");
const rulesBox = document.querySelector(".rulBox");
const rulebtn = document.querySelector(".rules-btn");
const players = document.querySelector(".players");
const game = document.querySelector(".choose");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissor");
const paper = document.querySelector(".paper");
const replay = document.querySelector(".replay");
const result = document.querySelector(".wonTitle");
const userColor = document.querySelector(".youPicked"); 
const pcColor = document.querySelector(".pcPicked");
const countPc = document.querySelector(".countPc");
const countUser = document.querySelector(".countUser");
const nextBtn = document.querySelector(".next-btn");
let userSelected = "";




let pcScore =  parseInt(localStorage.getItem("pcScore")||0);
let userScore = parseInt(localStorage.getItem("userScore")||0);


cross.addEventListener('click',()=>{
    rulesBox.classList.add('active');
    
})

rulebtn.addEventListener('click',()=>{
    rulesBox.classList.remove('active');
})

players.classList.add('active');

rock.addEventListener('click',()=>{
    userSelected = "rock";
    changeImageSource('./rock.png');
    game.classList.add('active');
    players.classList.remove('active');
    
    
})
paper.addEventListener('click',()=>{
    userSelected = "paper";
    changeImageSource('./paper.png');
    game.classList.add('active');
    players.classList.remove('active');
   
})
scissor.addEventListener('click',()=>{
    userSelected = "scissor";
    changeImageSource('./scissor.png');
    game.classList.add('active');
    players.classList.remove('active');
   
})

replay.addEventListener('click',()=>{
   players.classList.add('active'); 
   game.classList.remove('active'); 
});

const arr = ["rock","paper","scissor"];
var pcSelected;

function getRandom(){
    var randNo = Math.floor(Math.random()*arr.length);
    pcSelected = arr[randNo];
}

var colorObj = {
    rock: "#0074B6",
    paper:"#FFA943",
    scissor:"#BD00FF"
}


function changeImageSource(path){
    var imageElement = document.querySelector('.userSelected');
    imageElement.src = path;
    getRandom();
    imageElement = document.querySelector('.pcSelected');
    imageElement.src = pcSelected+".png";
    gameResult();
    userColor.style.border = `8px solid ${colorObj[userSelected]}`;
    pcColor.style.border = `8px solid ${colorObj[pcSelected]}`;
}

function gameResult(){
    if(userSelected == "rock" && pcSelected == "scissor"){
       result.innerText = "YOU WIN";  
       replay.innerText = "PLAY AGAIN";
    }
    else if(userSelected == "paper" && pcSelected == "rock"){
       result.innerText = "YOU WIN";
       replay.innerText = "PLAY AGAIN";
    }
    else if(userSelected == "scissor" && pcSelected == "paper"){
       result.innerText = "YOU WIN";
       replay.innerText = "PLAY AGAIN"; 
    }
    else if(userSelected == "rock" && pcSelected == "paper"){
       result.innerText = "YOU LOST";
       replay.innerText = "PLAY AGAIN"; 
    }
    else if(userSelected == "paper" && pcSelected == "scissor"){
       result.innerText = "YOU LOST"; 
       replay.innerText = "PLAY AGAIN";  
    }
    else if(userSelected == "scissor" && pcSelected == "rock"){
       result.innerText = "YOU LOST"; 
       replay.innerText = "PLAY AGAIN";  
    }
    else if(userSelected == "rock" && userSelected == "rock"){
             result.innerText = "TIE UP";  
             replay.innerText = "REPLAY";         
    }
    else if(userSelected == "paper" && userSelected == "paper"){
           result.innerText = "TIE UP"; 
           replay.innerText = "REPLAY";     
    }
    else if(userSelected == "scissor" && userSelected == "scissor"){
           result.innerText = "TIE UP";   
           replay.innerText = "REPLAY";     
    }
    userColor.classList.remove('animation');
    pcColor.classList.remove('animation');
    if(result.innerText == "YOU WIN"){
        userColor.classList.add('animation');
        nextBtn.classList.add('nextActive')
        userScore+= 1;
        localStorage.setItem("userScore",userScore); 
        upadateScore();
    }else if(result.innerText == "YOU LOST"){
        pcColor.classList.add('animation');
        nextBtn.classList.remove('nextActive')
        pcScore+=1;
        localStorage.setItem("pcScore",pcScore); 
        upadateScore();
    }else{
        nextBtn.classList.remove('nextActive')
    }
    
}

function upadateScore(){
    countPc.innerText = pcScore;
    countUser.innerText = userScore;
}
upadateScore();
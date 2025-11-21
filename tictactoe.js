let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector("#msg");
let turnO=true;//player X,O

//winnig patterns
const winpatterns=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8],

];

//reset game button
const resetGame=()=>{
    turnO=true;
    enabledboxes();
    msg-container.classList.add("hide");
}

//adding event listners
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

//disabled boxes after winning a player
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//enable boxes for a new game
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
//show winner function
const showWINNER=(WINNER)=>{
    msg.innerText=`congrats!!!, WINNER is player ${WINNER}`;
    msg.classList.remove("hide");
    disabledboxes();
}

// winner function
const checkwinner=()=>{
    for(let pattern of winpatterns){
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val!=""&&pos2val!=""&&pos3val!="") {
            if (pos1val===pos2val&&pos2val===pos3val) {
                console.log("WINNER");
                showWINNER(pos1val);
               disabledboxes() ;
            }
            
        }
    }
}

//reset and new game btns
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
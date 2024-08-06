let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clik");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
            
        }
        else{
            box.innerText = "X";
            turn0 = true;

        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = 'congratulations you are winner';
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}
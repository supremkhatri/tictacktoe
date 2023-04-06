let turn = "X";
let gameover = false;
let draw = true;
// function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    for (let i = 0; i <= 8; i++) {
        document.getElementsByClassName('boxtext')[i].innerText = "";
    }
    turn = "X";
    gameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for   " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
    document.querySelector('.line').style.width = "0";
})

// function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]
    wins.forEach((arr) => {
        if (boxtext[arr[0]].innerText === boxtext[arr[1]].innerText && boxtext[arr[2]].innerText === boxtext[arr[1]].innerText && boxtext[arr[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[arr[0]].innerText + "  won";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "24vw";
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${arr[3]}vw, ${arr[4]}vw) rotate(${arr[5]}deg)`;
        }
    })
}

//function to check draw 
const checkDraw = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let filledBoxes = 0;
    Array.from(boxtext).forEach((element)=>{
        if(element.innerText == "X" || element.innerText == "0"){
            filledBoxes++;
        }
    })
    if (filledBoxes === 9){
     draw =true;
    }
    else{
        draw= false;
    }
}

// Main logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (!gameover) {
            if (boxtext.innerText === '') {
                boxtext.style.color="white";
                boxtext.innerText = turn;
                turn = changeTurn();
                checkWin();
                checkDraw();
                if(!gameover){
                if (draw) {
                    document.getElementsByClassName('info')[0].innerText = "It's a Draw ";
                    gameover = true;
                }
            }
            }
        }
        if (!gameover) {
            document.getElementsByClassName('info')[0].innerText = "Turn for   " + turn;
        }

    })
})

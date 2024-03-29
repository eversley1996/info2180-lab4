let addBoardClass= () => {
    let entireBoard= document.getElementById('board');
    let cells=entireBoard.children; //Divide the board into its 9 divs

    //Add square class to all divs
    for (i=0; i< cells.length; i++){
        cells[i].classList.add('square');
    }

    //Add mouse hover
    for (let j=0; j < cells.length; j++){
        cells[j].onmouseover = function(){cells[j].classList.toggle("hover",true)}
        cells[j].onmouseout = function(){cells[j].classList.toggle("hover",false)}
    }

    //Add event listeners to all divs
    for (let i=0; i<cells.length; i++){
        //Add functionality to each cell
        cells[i].addEventListener("click",function(){

            if(gameState.length==0 && cells[i].textContent=== ""){ //Game just started
                cells[i].classList.add("X");
                cells[i].textContent=("X");
                gameState.push("X");
                checkWinner(cells);
            }else{
                if (gameState[gameState.length - 1]== 'X' && cells[i].textContent=== ""){
                    cells[i].classList.add("O");
                    cells[i].textContent=("O");
                    gameState.push("O");
                    checkWinner(cells);

                }else if (cells[i].textContent=== ""){
                    cells[i].classList.add("X");
                    cells[i].textContent=("X");
                    gameState.push("X");
                    checkWinner(cells);
                }
            }
        });
    }

    //Reset the game
    document.getElementsByClassName("btn")[0].addEventListener("click",function(){

        gameState.length= 0; // Clears the array
        
        //Put all cells blank
        for(let i = 0; i < cells.length; i++){
            cells[i].innerHTML=("");
        }

        //Change back status to default
        document.getElementById("status").textContent = 
        "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");
        
    });

    //Make cells unselectable
    for (let k=0; k < cells.length; k++){
        cells[k].setAttribute("unSelectable", "on");
    }
}

//Load the page
document.addEventListener('DOMContentLoaded', addBoardClass);

var gameState=[]; 
//Dont forget to clear this when new game starts


/*
    Index numbers:

      0 |   1   | 2
    .................
      3 |   4   | 5
    .................
      6 |   7   | 8
    
*/

//Checks the different ways someone can win
var checkWinner= (cells) => {

    if (cells[0].textContent !== "" && cells[0].textContent === cells[1].textContent && cells[0].textContent === cells[2].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent=   "Congratulations! "+ cells[0].textContent + " is the Winner!"
     }
     else if (cells[3].textContent !== "" && cells[3].textContent === cells[4].textContent && cells[3].textContent === cells[5].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[3].textContent + " is the Winner!"
     }
     else if (cells[6].textContent !== "" && cells[6].textContent === cells[7].textContent && cells[6].textContent === cells[8].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[6].textContent + " is the Winner!"
     }
     else if (cells[0].textContent !== "" && cells[0].textContent === cells[3].textContent && cells[0].textContent === cells[6].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[0].textContent + " is the Winner!"
     }
     else if (cells[1].textContent !== "" && cells[1].textContent === cells[4].textContent && cells[1].textContent === cells[7].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[1].textContent + " is the Winner!"

     }else if (cells[2].textContent !== "" && cells[2].textContent === cells[5].textContent && cells[2].textContent === cells[8].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[2].textContent + " is the Winner!"

     }else if (cells[6].textContent !== "" && cells[6].textContent === cells[4].textContent && cells[6].textContent === cells[2].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent =  "Congratulations! "+ cells[6].textContent + " is the Winner!"
     }
     else if (cells[0].textContent !== "" && cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[0].textContent + " is the Winner!"
     }
  
     
}

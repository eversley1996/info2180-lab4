let addBoardClass= () => {
    let entireBoard= document.getElementById('board');
    let cells=entireBoard.children; //Divide the board into its 9 divs

    //Add square class to all divs
    for (i=0; i< cells.length; i++){
        cells[i].classList.add('square');
    }

    for (let j=0; j < cells.length; j++){
        cells[j].onmouseover = function(){cells[j].classList.toggle("hover",true)}
        cells[j].onmouseout = function(){cells[j].classList.toggle("hover",false)}
    }

    //Add event listeners to all divs
    for (let i=0; i<cells.length; i++){

        cells[i].addEventListener("click",function(){

            if(gameState.length==0){ //Game just started
                cells[i].classList.add("X");
                cells[i].innerHTML=("X");
                gameState.push("X");
            }else{
                if (gameState[gameState.length - 1]== 'X'){
                    cells[i].classList.add("O");
                    cells[i].innerHTML=("O");
                    gameState.push("O");
                }else{
                    cells[i].classList.add("X");
                    cells[i].innerHTML=("X");
                    gameState.push("X");
                }
            }
        });
    }


}

document.addEventListener('DOMContentLoaded', addBoardClass);

var gameState=[]; 
//Dont forget to clear this when new game starts


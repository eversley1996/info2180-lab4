let addBoardClass= () => {
    let entireBoard= document.getElementById('board');
    let gridElements=entireBoard.children;

    for (i=0; i< gridElements.length; i++){
        gridElements[i]= gridElements[i].classList.add('square');
    }
}

document.addEventListener('DOMContentLoaded', addBoardClass);
let board = [];
let gameWon = false;



function play(clickedID){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedID);

    if(playerSpan.innerText === 'X' && !board[clickedID] && !gameWon){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedID] = 'X';
    }
    else if (playerSpan.innerText === 'O' && !board[clickedID] && !gameWon){
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedID] = 'O';
    }
    console.log(board);
    console.log(gameWon)
    console.log(clickedElement)

    const topleft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const lowerLeft = board[6];
    const lowerCenter = board[7];
    const lowerRight = board[8];

    if(topleft !== undefined && topleft === topCenter && topleft === topRight && !gameWon){
        gameWon = true;
        console.log('hello!')
        console.log(gameWon)
        window.alert(`${topleft} is the winner!`)
    }
    else if(topleft !== undefined && topleft === middleLeft && topleft === lowerLeft && !gameWon){
        gameWon = true;
        window.alert(`${topleft} is the winner!`)
    }
    else if(topleft !== undefined && topleft === middleCenter && topleft === lowerRight && !gameWon){
        gameWon = true;
        window.alert(`${topleft} is the winner!`)
    }
    else if(topCenter !== undefined && topCenter === middleCenter && topCenter === lowerCenter && !gameWon){
        gameWon = true;
        window.alert(`${topCenter} is the winner!`)
    }
    else if(topRight !== undefined && topRight === middleRight && topRight === lowerRight && !gameWon){
        gameWon = true;
        window.alert(`${topRight} is the winner!`)
    }
    else if(topRight !== undefined && topRight === middleCenter && topRight === lowerLeft && !gameWon){
        gameWon = true;
        window.alert(`${topRight} is the winner!`)
    }
    else if(middleLeft !== undefined && middleLeft === middleRight && middleLeft === middleCenter && !gameWon){
        gameWon = true;
        window.alert(`${middleLeft} is the winner!`)
    }
    else if(lowerLeft !== undefined && lowerLeft === lowerCenter && lowerLeft === lowerRight && !gameWon){
        gameWon = true;
        window.alert(`${lowerLeft} is the winner!`)
    }
    let boardFull = true;
    for (i = 0; i<=8; i++){
        if (board[i] === undefined){
            boardFull = false;
        }
    }
    if (boardFull){
        alert("Cat's game!")
        gameWon = true;
    }

    if(gameWon){
        let timesWon = 0;
        console.log('this is it!')
        const buttonCreater = document.getElementById('reset');
        const button = document.createElement('button');
        button.id = 'resetButton'
        button.innerText = 'Play again!';
        timesWon++;
        buttonCreater.append(button)
        button.addEventListener('click', resetGame);

    }
}

function resetGame(){
    console.log('I AM HERE')
    const button = document.getElementById('resetButton')
    let playerSpan = document.getElementById('player');

    board = [];
    gameWon = false;
    let resetter = document.getElementsByTagName('td')
    for (i=0; i<resetter.length; i++){
        resetter[i].innerText = ''
    }
    console.log(board)
    playerSpan.innerText = 'X'
    button.remove()

    
}
// keeps score of the game using JSON local storage since we converted to string earlier

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };


// random move for the computer
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if(randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  } return computerMove;
} 

// game function that tells the result after computer move and player choose
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  
  let result = '';

  if(playerMove === 'scissors') {
    if(computerMove === 'rock') {
      result = 'You Lose!';
    } else if(computerMove === 'paper') {
      result = 'You Win!';
    } else if(computerMove === 'scissors') {
      result = 'Tie!';
    }
  } else if(playerMove === 'paper') {
    if(computerMove === 'rock') {
      result = 'You Win!';
    } else if(computerMove === 'paper') {
      result = 'Tie!';
    } else if(computerMove === 'scissors') {
      result = 'You Lose!';
    }
  } else if(playerMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie!';
    } else if(computerMove === 'paper') {
      result = 'You Lose!';
    } else if(computerMove === 'scissors') {
      result = 'You Win!';
    }
  }

  // increases score based on result
  if(result === 'You Win!') {
    score.wins++;
  } else if(result === "You Lose!") {
    score.losses++;
  } else {
    score.ties++;
  }
  // stores score in local storage, then converting score into string using JSON
  localStorage.setItem('score', JSON.stringify(score));
  
  // alert after playerchoice to tell user the result in alertbox
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}








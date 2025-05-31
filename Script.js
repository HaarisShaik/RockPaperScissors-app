// function play(player1choice,player2Choice) {
//     const choice = ['rock', 'paper', 'scissors'];

//     let result = '';

//     if (player1Choice === player2Choice)
//     {
//         result= "it's a tie!";
//     }else if (
//         (player1Choice === 'rock' && player2Choice === 'scissors') ||
//         (player1Choice === 'paper' && player2Choice === 'rock') ||
//         (player1Choice === 'scissors' && player2Choice === 'paper')
//             ) {
//              result = `You win! ${player1Choice} beats ${player2Choice}.`;
//             }else {
//                 result = `You lose! ${player2Choice} beats ${player1Choice}.`;
//               }
//               document.getElementById('result').textContent = result;
// }

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let result = '';
  
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
      result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
  
    document.getElementById('result').textContent = result;
  }
  
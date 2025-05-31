/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, currentScore, activePlayer,gamePlaying;

init();

// Event liistener for Roll the dice button.
document.querySelector('.btn-roll').addEventListener('click', function (){
    if(gamePlaying){
        // 1. Get a random Number
        var dice = Math.floor(Math.random() * 6 + 1);
        // 2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        // 3. Update the roundscore if the number is not 1
        if(dice !== 1){
            currentScore = currentScore + dice;
            document.getElementById('current-' + activePlayer).textContent = currentScore;
        }
        else{
            nextPlayer();
        }
    }
});

// Event listener for Hold Button:
document.getElementsByClassName('btn-hold')[0].addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += currentScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 10){
            document.getElementById('name-'+activePlayer).textContent = 'Winner';
            document.getElementsByClassName('player-' + activePlayer + '-panel')[0].classList.remove('active');
            document.getElementsByClassName('player-' + activePlayer + '-panel')[0].classList.add('winner');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
            document.getElementsByClassName('btn-roll')[0].disabled=true;
        }
        else{
            nextPlayer();
        }
    }
});

// EventListener for New Game button:
document.getElementsByClassName('btn-new')[0].addEventListener('click', function(){
    init();
    document.getElementsByClassName('btn-roll')[0].disabled=false;

});


function nextPlayer () {
// Change the active player
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
currentScore = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

document.querySelector('.dice').style.display = 'none';
}

function init () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementsByClassName('player-0-panel')[0].classList.remove('winner');
    document.getElementsByClassName('player-1-panel')[0].classList.remove('winner');
    document.getElementsByClassName('player-0-panel')[0].classList.remove('active');
    document.getElementsByClassName('player-1-panel')[0].classList.remove('active');
    document.getElementsByClassName('player-0-panel')[0].classList.add('active');
}


// document.getElementsByClassName('btn-roll')[0].disabled=true;
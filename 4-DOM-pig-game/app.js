/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, isPlaying, lastRoll, winningScore;

var diceDOM1 = document.querySelector('.dice--1');
var diceDOM2 = document.querySelector('.dice--2');

init();

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    lastRoll = [0,0];
    isPlaying = true;

    document.querySelector('.dice--1').style.display = 'none';
    document.querySelector('.dice--2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}



document.querySelector('.btn-roll').addEventListener('click', function() { 
    
    if (isPlaying) {
        var activePlayerCurrent = document.querySelector('#current-' + activePlayer);
        var lastRollDOM = document.getElementById('last-'+activePlayer);

        // 1. Random Number
        var dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];


        // 2. Display the result

        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'dice-' + dice[0] + '.png';
        diceDOM2.src = 'dice-' + dice[1] + '.png';

        // 3. Update the round score IF the rolled number was not a 1
        if (dice.indexOf(6) >= 0 && lastRoll.indexOf(6) >= 0) {
            //2 SIXES IN A ROW
            
            //set score to 0
            scores[activePlayer] = 0;
            lastRoll = dice;
            document.getElementById('score-'+[activePlayer]).textContent = scores[activePlayer];
            lastRollDOM.textContent = 'last roll: '+lastRoll[0]+' , '+lastRoll[1];
            
            //switch player
            switchPlayer();
        } else if (dice[0] === 6 && dice[1] ===6) {
            //2 SIXES IN ONE ROLL

            scores[activePlayer] = 0;
            lastRoll = dice;
            document.getElementById('score-' + [activePlayer]).textContent = scores[activePlayer];
            lastRollDOM.textContent = 'last roll: ' + lastRoll[0] + ' , ' + lastRoll[1];

            //switch player
            switchPlayer();
        } else if (dice[0] !== 1 && dice[1] !== 1) {
            //SAFE ROLL

            //Add score
            roundScore += (dice[0]+dice[1]);
            
            activePlayerCurrent.textContent = roundScore;
            if (lastRoll[0] !== 0 && lastRoll[1] !== 0) {lastRollDOM.textContent = 'last roll: ' + lastRoll[0] + ' , ' + lastRoll[1]; } else {lastRollDOM.textContent = 'last roll: - , -' ;}
            lastRoll = dice;
        } else {
            //ROLLED A 1

            //Reset Current and Next Player
            lastRoll = dice;
            lastRollDOM.textContent = 'last roll: ' + lastRoll[0] + ' , ' + lastRoll[1];
            switchPlayer();
        }
    }
});

function switchPlayer() {
    var activePlayerCurrent = document.querySelector('#current-' + activePlayer);

    roundScore = 0;
    lastRoll = [0,0];
    activePlayerCurrent.textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDOM1.style.display = 'none';
    diceDOM2.style.display = 'none';
}

document.querySelector('.btn-hold').addEventListener('click',function() {

    if (isPlaying) {
        //Add Current score to Scores[player]
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        if (input){
            winningScore = input;
        } else {
            winningScore = 100;
        }

        //Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            diceDOM1.style.display = 'none';
            diceDOM2.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isPlaying = false;

        } else {
            //Switch Player
            switchPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);


/*---------------------------------------------------------------------------------*/

//document.querySelector('#current-'+ activePlayer).textContent = dice; //setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+dice+'</em>'
// var x = document.querySelector('#score-0').textContent; //getter
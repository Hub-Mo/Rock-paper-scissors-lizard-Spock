


let GameArray = ["rock", "paper", "scissor", "lizard", "spock"];
let computerChoice = '';
let playerGetPoint = 'player gets a point';
let ComputerGetPoint = ' computer gets a point';
let referee = document.getElementById('referee');
let printPlayerChoice = document.getElementById('player-choice');
let printComputerChoice = document.getElementById('computer-choice');
let playerPoints = document.getElementById('player-points');
let computerPoints = document.getElementById('computer-points');
let player = 0;
let computer = 0;

let Reset = document.getElementById('reset-game').addEventListener('click', () => {
    location.reload();
})

document.querySelectorAll('.player-buttons').forEach(item => {
    item.addEventListener('click', () => { 

        let randomNum = Math.floor(Math.random() * GameArray.length);
        computerChoice = GameArray[randomNum];
        console.log(randomNum);
        console.log(item.value);
        console.log(computerChoice);
            if (item.value == computerChoice){
                referee.innerHTML = 'its a tie, no points';
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'rock' && computerChoice == 'lizard'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;

            }
            else if (item.value == 'rock' && computerChoice == 'scissor'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'scissor' && computerChoice == 'paper'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'scissor' && computerChoice == 'lizard'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'lizard' && computerChoice == 'spock'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'lizard' && computerChoice == 'paper'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'paper' && computerChoice == 'rock'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'paper' && computerChoice == 'spock'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'spock' && computerChoice == 'rock'){
                referee.innerHTML = 'Player gets a point';
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else if (item.value == 'spock' && computerChoice == 'scissor'){
                player += 1;
                playerPoints.innerHTML = player;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
            }
            else {
                console.log('computer gets a point');
                computer +=1;
                computerPoints.innerHTML = computer;
                printPlayerChoice.innerHTML = item.value;
                printComputerChoice.innerHTML = computerChoice;
                referee.innerHTML = 'Computer gets a point';
            }
        });
    });





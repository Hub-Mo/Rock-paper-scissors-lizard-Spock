


let GameArray = ["rock", "paper", "scissor", "lizard", "spock"];
let playerChoice = '';
let computerChoice = '';
let playerPoint = 'player gets a point';
let ComputerPoint = ' computer gets a point';

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
                console.log('its a tie, no points');
            }
            else if (item.value == 'rock' && computerChoice == 'lizard'){
                console.log('Rock crushed Lizard');
                console.log(playerPoint);
            }
            else if (item.value == 'rock' && computerChoice == 'scissor'){
                console.log('Rock crushes Scissors');
                console.log(playerPoint);
            }
            else if (item.value == 'scissor' && computerChoice == 'paper'){
                console.log('scissor cuts paper');
                console.log('Player gets a point');
            }
            else if (item.value == 'scissor' && computerChoice == 'lizard'){
                console.log('scissor decapitate Lizard');
                console.log('Player gets a point');
            }
            else if (item.value == 'lizard' && computerChoice == 'spock'){
                console.log('Lizard poisond Spock');
                console.log('Player gets a point');
            }
            else if (item.value == 'lizard' && computerChoice == 'paper'){
                console.log('Lizard ate paper');
                console.log('Player gets a point');
            }
            else if (item.value == 'paper' && computerChoice == 'rock'){
                console.log('paper covered rock');
                console.log('Player gets a point');
            }
            else if (item.value == 'paper' && computerChoice == 'spock'){
                console.log('paper disproved Spock');
                console.log('Player gets a point');
            }
            else if (item.value == 'spock' && computerChoice == 'spock'){
                console.log('spock vaporized rock');
                console.log('Player gets a point');
            }
            else if (item.value == 'spock' && computerChoice == 'scissor'){
                console.log('spock smashed scissor');
                console.log('Player gets a point');
            }
            else {
                console.log('computer gets a point');
            }
        });
    });





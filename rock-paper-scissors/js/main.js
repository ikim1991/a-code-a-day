const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const results = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.getElementById('modal');

const scoreboard = {
    player: 0,
    computer: 0
}

// Play game

const play = (e) => {
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

const getComputerChoice = () => {
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock'
    } else if(rand <= 0.67){
        return 'paper'
    } else{
        return 'scissors'
    }
}

const getWinner = (p, c) => {
    if(p === c){
        return 'draw'
    } else if((p === 'paper' && c === 'scissors') || (p === 'scissors' && c === 'rock') || (p === 'rock' && c === 'paper')){
        return 'lose'
    } else{
        return 'win'
    }
}

const showWinner = (winner, computerChoice) => {
    console.log(results)
    if(winner === 'win'){
        scoreboard.player++;
        results.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fa fa-hand-${computerChoice}-o"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `
    } else if(winner === 'lose'){
        scoreboard.computer++;
        results.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fa fa-hand-${computerChoice}-o"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `
    } else{
        results.innerHTML = `
        <h1>Draw</h1>
        <i class="fa fa-hand-${computerChoice}-o"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `
    }

    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `
    modal.style.display = 'inline-block';
}

const clearModal = (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
}

const restartGame = (e) => {
    scoreboard.player = 0;
    scoreboard. computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>computer: 0</p>
    `

    restart.display = 'none';
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)
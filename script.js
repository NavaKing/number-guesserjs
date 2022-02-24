let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    Math.floor(Math.random()*10 )
};

const compareGuesses =(human, computer, target)=> {
    if (Math.abs(human - target) < Math.abs(computer - target)) {
        return true;
    }else if (Math.abs(computer - target) < Math.abs(human - target)) {
        return false;
    } else {
        return true;
    }
};

let updateScore = winner => {
    if(winner === 'human') {
        humanScore += 1;
    }else if (winner === 'computer'){
        computerScore += 1;
    }
};

function advanceRound () {
    currentRoundNumber +=1;
}
//import { GameConfig, Dice } from './interfaces';

interface GameConfig {
    throwCount: number;
    diceGoal: number;
};

interface Dice {
    element: HTMLElement;
    previousResult?: number;
}

const gameConfig: GameConfig = {
    throwCount: 0,
    diceGoal: 1,
};
const dice: Dice = {
    element: document.getElementById("dice") as HTMLElement,
};
const button = document.getElementById("throw") as HTMLButtonElement;
const resetButton = document.getElementById("reset") as HTMLButtonElement;


const diceThrow = () => {
    let randomResult = Math.floor(Math.random() * 6) + 1;
  
    dice.element.classList.toggle("dots-" + dice.previousResult);
    dice.element.classList.toggle("dots-" + randomResult);
  


    if (randomResult === gameConfig.diceGoal) {
        let tempDice = document.getElementsByClassName("dots-" + randomResult);
        tempDice[0].classList.toggle("faded");
        gameConfig.diceGoal++;
    }

    if (gameConfig.diceGoal === 7) {
        button.disabled = true;
        button.classList.toggle("faded");
        alert(`Du har klarat spelet på ${gameConfig.throwCount} kast`);
        resetButton.classList.toggle("hidden");
    }
    
    dice.previousResult = randomResult;
    gameConfig.throwCount++;
    button.innerText = `Kasta (${gameConfig.throwCount})`;
};
    
const resetGame = () => {
    gameConfig.throwCount = 0;
    gameConfig.diceGoal = 1;

    dice.element.classList.toggle("dots-" + dice.previousResult);
  
    for (let i = 1; i < 7; i++) {
      let fadeDices = document.getElementsByClassName("dots-" + i);
      fadeDices[0].classList.toggle("faded");
    }
  
    button.disabled = false;
    button.classList.toggle("faded");
    button.innerText = "Kasta";
    resetButton.classList.toggle("hidden");
  };
  
  button.addEventListener("click", diceThrow);
  resetButton.addEventListener("click", resetGame);
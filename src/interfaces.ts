export interface GameConfig {
    throwCount: number;
    diceGoal: number;
    diceThrow: () => void; 
    resetGame: () => void;
};

export interface Dice {
    element: HTMLElement;
    previousResult?: number;
}
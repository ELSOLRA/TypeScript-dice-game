export interface GameConfig {
    throwCount: number;
    diceGoal: number;
};

export interface Dice {
    element: HTMLElement;
    previousResult?: number;
}
import Bird from "../game_objects/bird/bird.js";
import { Router } from "../routes/index.js";

const pauseGame = () => {};
const startGame = () => {
    Router.nav("game");
};
const birdJump = () => {
    Bird.jump();
};

const birdMoveUp = () => {
    Bird.moveUp();
};
const birdMoveDown = () => {
    Bird.moveDown();
};
const birdSpeedUp = () => {
    Bird.speedUp();
};
const birdSpeedNor = () => {
    Bird.speedNormal();
};
export const eventHandler = (() => {
    return {
        birdJump,
        pauseGame,
        startGame,
        birdMoveUp,
        birdMoveDown,
        birdSpeedUp,
        birdSpeedNor,
    };
})();

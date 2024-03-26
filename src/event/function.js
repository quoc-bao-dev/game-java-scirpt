import Control from "../control/control.js";
import Bird from "../game_objects/bird/bird.js";
import { Router } from "../routes/index.js";

const pauseGame = () => {};
const startGame = () => {
    Router.nav("game");
    Control.start();
};
const birdJump = () => {
    Bird.jump();
};

const birdMoveUp = () => {
    Bird.moveUp();
    Bird.styleUp();
};
const birdMoveDown = () => {
    Bird.moveDown();
    Bird.styleDown();
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

import Bird from "../game_objects/bird/bird.js";
import gameControl from "../game_objects/game_control/gameControl.js";
import Score from "../game_objects/score/score.js";
import { Router } from "../routes/index.js";

const pauseGame = () => {};
const startGame = () => {
    Router.nav("game");
    Bird.start();
    Score.init();
    gameControl.main();
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

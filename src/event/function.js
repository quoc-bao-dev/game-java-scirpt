import Bird from "../game_objects/bird/bird.js";
import { Router } from "../routes/index.js";

const pauseGame = () => {};
const startGame = () => {
    Router.nav("game");
};
const birdJump = () => {
    Bird.jump();
};
export const eventHandler = (() => {
    return {
        birdJump,
        pauseGame,
        startGame,
    };
})();

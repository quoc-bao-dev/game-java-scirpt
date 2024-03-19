import animate from "../../animate/main.js";
import { mockAPI } from "../../service/mockAPI.js";
import { mockCoinAPI } from "../../service/mockCoinAPI.js";
import Bird from "../bird/bird.js";
import Coins from "../coins/coins.js";
import Score from "../score/score.js";
import Walls from "../walls/walls.js";

const Game = (() => {
    const state = {
        isPause: false,
    };
    const isPause = () => state.isPause;
    const pause = () => {
        state.isPause = true;
    };
    const play = () => {
        state.isPause = false;
        requestAnimationFrame(animate);
    };
    const start = () => {
        Walls.render(mockAPI);
        Bird.start();
        Score.init();
        Coins.render(mockCoinAPI);
        requestAnimationFrame(animate);
    };
    return {
        start,
        pause,
        play,
        isPause,
    };
})();
export default Game;

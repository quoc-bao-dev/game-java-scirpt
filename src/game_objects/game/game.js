import animate from "../../animate/main.js";
import { Plane } from "../../factory/buildObstacle.js";
import Bird from "../bird/bird.js";
import Planes from "../planes/planes.js";
import Score from "../score/score.js";

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
        Planes.render([Plane.create()]);
        Bird.start();
        Score.init();
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

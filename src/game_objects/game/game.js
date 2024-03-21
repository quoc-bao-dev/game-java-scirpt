import animate from "../../animate/main.js";
import gameControl from "../game_control/gameControl.js";

const Game = (() => {
    const state = {
        isPause: false,
        level: 0,
    };
    const isPause = () => state.isPause;
    const pause = () => {
        state.isPause = true;
    };
    const play = () => {
        state.isPause = false;
        gameControl.start();
        requestAnimationFrame(animate);
    };
    const start = () => {
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

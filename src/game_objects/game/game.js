import animate from "../../animate/main.js";
import Sound from "../../sound/sound.js";
import ModalOver from "../../ui_objects/modalOver.js";
import Score from "../score/score.js";

const Game = (() => {
    const state = {
        isPause: false,
        isEnd: false,
        level: 0,
    };
    const isPause = () => state.isPause;
    const isEnd = () => state.isEnd;
    const setIsEnd = (value) => (state.isEnd = value);
    const setIsPause = (value) => (state.isPause = value);
    const pause = () => {
        state.isPause = true;
    };
    const play = () => {
        state.isPause = false;
        requestAnimationFrame(animate);
    };
    const start = () => {
        // requestAnimationFrame(animate);
    };
    const over = () => {
        state.isPause = true;
        state.isEnd = true;
        const sc = Score.getScore();
        Sound.gameOver();
        ModalOver.set({ title: "Game Over T_T", score: sc });
        ModalOver.show();
    };

    const win = () => {
        Sound.gameWin();
        ModalOver.set({ title: "You Win!!!", score: Score.getScore() });
        ModalOver.show();
    };

    return {
        over,
        start,
        pause,
        play,
        isPause,
        setIsPause,
        isEnd,
        setIsEnd,
        win,
    };
})();
export default Game;

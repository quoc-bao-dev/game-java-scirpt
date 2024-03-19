import Game from "../game_objects/game/game.js";
import { eventHandler } from "./function.js";

const setClick = (selector, callback) => {
    const btn = document.querySelector(selector);
    if (btn) {
        btn.onclick = callback;
    }
};

export const mouse = () => {
    setClick("#btn-start", () => {
        eventHandler.startGame();
    });

    setClick("#btn-pause", () => {
        if (!Game.isPause()) Game.pause();
        else {
            Game.play();
        }
    });
};

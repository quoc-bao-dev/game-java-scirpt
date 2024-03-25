import Game from "../game_objects/game/game.js";
import Menu from "../ui_objects/menu.js";
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
        if (!Game.isPause()) {
            Menu.show();
            Game.pause();
        } else {
            Game.play();
        }
    });
};

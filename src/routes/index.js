import { GameScreen } from "../components/GameScreen.js";
import { StarScreen } from "../components/StartScreen.js";
import { BrowserNode } from "../constants/nodeElm.js";
import { initEvent } from "../event/index.js";

export const Router = (() => {
    const nav = (route) => {
        switch (route) {
            case "/":
                BrowserNode.innerHTML = StarScreen();
                initEvent();
                break;
            case "game":
                BrowserNode.innerHTML = GameScreen();
                initEvent();
                break;
            default:
                break;
        }
    };
    const start = () => {
        nav("/");
    };
    return {
        start,
        nav,
    };
})();
import { Coin } from "../class/Coin.js";
import { checkCollision } from "../function/checkCollision.js";
import NewBird from "../class/Bird.js";
import { ScreenNode } from "../constants/contant.js";
import { ScreenRect } from "../constants/contant.js";

export const Coins = (() => {
    const coins = [];
    return {
        render(data) {
            data.forEach((element) => {
                const nodeElm = new Coin(element);
                nodeElm.setStyle("background", "#fbbd05");
                nodeElm.mount(ScreenNode);
                coins.push(nodeElm);
            });
        },
        moveLeft() {
            coins.forEach((elm) => {
                if (elm.x2 < 0) elm.setCoor("x1", ScreenRect.width);
                if (checkCollision(elm.getXY(), NewBird.getXY())) {
                    elm.earned(ScreenNode);
                }
                elm.moveLeft();
            });
        },
    };
})();

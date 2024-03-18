import NewBird from "../class/Bird.js";
import { Pipe } from "../class/Pipe.js";
import { ScreenRect } from "../constants/contant.js";
import { checkCollision } from "../function/checkCollision.js";
import { CounterScore } from "../store/couter.js";

export const Walls = (() => {
    const walls = [];
    return {
        render(data) {
            data.forEach((element) => {
                const nodeElm = new Pipe(element);
                nodeElm.setStyle("background", "#ccc");
                nodeElm.mount(document.querySelector("#screen"));
                nodeElm;
                walls.push(nodeElm);
            });
        },
        moveLeft() {
            walls.forEach((elm) => {
                if (elm.x2 < 0) elm.setCoor("x1", ScreenRect.width);
                if (checkCollision(elm.getXY(), NewBird.getXY())) {
                    CounterScore.count++;
                    document.querySelector("#score").innerHTML =
                        CounterScore.count;
                }
                elm.moveLeft();
            });
        },
    };
})();

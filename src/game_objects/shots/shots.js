import { ShotClass } from "../../class/Shot.js";
import { checkCollision } from "../../function/checkCollision.js";
import Bird from "../bird/bird.js";
import Game from "../game/game.js";
import manage from "../manage/manage.js";

const Shots = (() => {
    const base = manage();

    return {
        ...base,
        logger() {
            console.log(base.list);
        },

        render(data) {
            data.forEach((item) => {
                const elm = new ShotClass(item);
                elm.setStyle("backgroundColor", "#323504");
                base.mountElm(elm);
            });
        },
        move() {
            base.list.forEach((elm) => {
                elm.moveLeft();
                if (elm.x2 < 0) {
                    base.unMountElm(elm);
                }
                if (elm.x1 < 200 && checkCollision(Bird.getXY(), elm.getXY())) {
                    Game.pause();
                    Game.over();
                }
            });
        },
    };
})();

export default Shots;

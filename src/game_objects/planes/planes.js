import { PipeClass } from "../../class/Pipe.js";
import { checkCollision } from "../../function/checkCollision.js";
import Bird from "../bird/bird.js";
import Game from "../game/game.js";
import manage from "../manage/manage.js";

const Planes = (() => {
    const base = manage();

    return {
        ...base,
        render(data) {
            data.forEach((item) => {
                const elm = new PipeClass(item);
                elm.setStyle("backgroundColor", "#ededed");
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
                }
            });
        },
    };
})();

export default Planes;

import { PipeClass } from "../../class/Pipe.js";
import { ScreenNode, ScreenRect } from "../../constants/nodeElm.js";
import { House } from "../../factory/buildObstacle.js";
import { checkCollision } from "../../function/checkCollision.js";
import Bird from "../bird/bird.js";
import Game from "../game/game.js";

const Walls = (() => {
    /// test loop
    const loop = false;
    const listWall = [];
    const mountElm = (elm) => {
        elm.mount(ScreenNode.node());
        listWall.push(elm);
    };
    const unMountElm = (elm) => {
        elm.unMount(ScreenNode.node());
        for (let i = 0; i < listWall.length; i++) {
            if (listWall[i].id === elm.id) {
                listWall.splice(i, 1);
                break;
            }
        }
    };

    return {
        logger() {
            console.log(listWall);
        },
        render(data) {
            data.forEach((item) => {
                const elm = new PipeClass(item);
                elm.setStyle("backgroundColor", "#999");
                mountElm(elm);
            });
        },
        move() {
            listWall.forEach((elm) => {
                elm.moveLeft();
                //TODO: remove loop when project done
                /// test loop
                if (loop && elm.x2 < 0) elm.x1 = ScreenRect.width();
                if (elm.x2 < 0) {
                    House.setX(960);
                    this.render([House.create()]);
                    unMountElm(elm);
                }
                if (elm.x1 < 200 && checkCollision(Bird.getXY(), elm.getXY())) {
                    Game.pause();
                }
            });
        },
    };
})();

export default Walls;

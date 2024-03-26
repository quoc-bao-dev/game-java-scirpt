import { PipeClass } from "../../class/Pipe.js";
import { ScreenNode, ScreenRect } from "../../constants/nodeElm.js";
import Control from "../../control/control.js";
import { House } from "../../factory/buildObstacle.js";
import checkBirdBeat from "../../function/checkBirdBeat.js";
import { checkCollision } from "../../function/checkCollision.js";
import Bird from "../bird/bird.js";
import Game from "../game/game.js";

const Walls = (() => {
    const state = {
        start: false,
        end: false,
        creating: false,
        lenghtStreet: 0,
        lengthScreen: 960,
    };
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
    const render = (data) => {
        data.forEach((item) => {
            const elm = new PipeClass(item);
            elm.setStyle("backgroundColor", "#999");
            mountElm(elm);
        });
    };

    return {
        render,
        clear() {
            listWall.length = 0;
        },
        start() {
            listWall.length = 0;
            state.lengthScreen = ScreenRect.width();
            state.creating = true;
            render([House.create()]);
        },
        end() {
            state.creating = false;
        },
        logger() {
            console.log(listWall);
        },

        move() {
            listWall.forEach((elm) => {
                if (elm.x2 < 0) {
                    state.lenghtStreet -= elm.width;
                    unMountElm(elm);
                }
                if (elm.x1 < 400) {
                    checkBirdBeat(elm);
                }
            });
            listWall.forEach((elm) => {
                elm.moveLeft();
            });
        },
    };
})();

export default Walls;

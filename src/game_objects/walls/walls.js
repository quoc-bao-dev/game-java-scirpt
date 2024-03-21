import { PipeClass } from "../../class/Pipe.js";
import { ScreenNode, ScreenRect } from "../../constants/nodeElm.js";
import { House } from "../../factory/buildObstacle.js";
import { checkCollision } from "../../function/checkCollision.js";
import { scriptHouseLv1 } from "../../script/level1/scriptHouseLv1.js";
import Bird from "../bird/bird.js";
import Coins from "../coins/coins.js";
import Game from "../game/game.js";
import Planes from "../planes/planes.js";

const Walls = (() => {
    const state = {
        start: false,
        end: false,
        creating: false,
        lenghtStreet: 0,
        lengthScreen: 960,
    };
    const tracking = {};
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
        start() {
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
                // render wall
                if (
                    state.creating &&
                    !tracking[elm.id] &&
                    elm.x1 < ScreenRect.width() + elm.speedX &&
                    scriptHouseLv1.length > 0
                ) {
                    if (scriptHouseLv1[0].coin) {
                        const coin = {
                            ...scriptHouseLv1[0].coin,
                        };
                        Coins.render([coin]);
                    }
                    if (scriptHouseLv1[0].plane) {
                        const plane = {
                            ...scriptHouseLv1[0].plane,
                        };
                        Planes.render([plane]);
                    }
                    tracking[elm.id] = true;
                    House.setX(elm.x2 - elm.speedX);
                    render([House.create()]);
                }
                elm.moveLeft();
                if (elm.x2 < 0) {
                    state.lenghtStreet -= elm.width;
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

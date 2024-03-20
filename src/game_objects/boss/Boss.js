import { BossClass } from "../../class/Boss.js";
import { ScreenNode } from "../../constants/nodeElm.js";
import Shots from "../shots/shots.js";

const Boss = (() => {
    const counter = {
        frameUp: 0,
        frameDown: 0,
    };
    const state = {
        start: false,
    };
    const boss = new BossClass({
        id: "boss",
        x: 960,
        y: 560 / 2,
        height: 300,
        width: 200,
        speedX: 1,
        speedY: 1,
    });
    boss.setStyle("backgroundColor", "#323212");
    return {
        move() {
            if (counter.frameUp < 12 && boss.y1 > 0) {
                boss.moveUp();
                counter.frameUp++;
            }
            if (counter.frameDown < 12 && boss.y2 < 560) {
                boss.moveDown();
                counter.frameDown++;
            }
            if (state.start) {
                if (boss.x1 > 800 && state.start) {
                    boss.moveLeft();
                } else {
                    state.start = false;
                    this.gun();
                }
            }
        },
        moveUp() {
            counter.frameUp = 0;
        },
        moveDown() {
            counter.frameDown = 0;
        },
        start() {
            state.start = true;
            boss.mount(ScreenNode.node());
        },
        gun() {
            const shot = {
                ...boss.getPointGun(),
                width: 80,
                height: 20,
                speedX: 3,
            };
            Shots.render([shot]);
        },
    };
})();

export default Boss;

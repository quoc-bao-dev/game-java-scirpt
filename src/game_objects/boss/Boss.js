import { BossClass } from "../../class/Boss.js";
import { ScreenNode } from "../../constants/nodeElm.js";
import { scriptBossLv1 } from "../../script/level1/scriptBossLv1.js";
import Shots from "../shots/shots.js";

const Boss = (() => {
    const counter = {
        frameUp: 0,
        frameDown: 0,
    };
    const state = {
        start: false,
        end: false,
        isUpdate: false,
    };
    const boss = new BossClass({
        id: "boss",
        x: 960,
        y: 560 / 2 - 100,
        height: 200,
        width: 200,
        speedX: 1,
        speedY: 1,
    });
    boss.setStyle("backgroundColor", "#323212");

    const boosGun = () => {
        const shot = {
            ...boss.getPointGun(),
            width: 80,
            height: 20,
            speedX: 3,
        };
        Shots.render([shot]);
    };
    return {
        move() {
            if (scriptBossLv1.length === 0) {
                Boss.end();
            }
            if (state.isUpdate && scriptBossLv1.length > 0) {
                state.isUpdate = false;
                setTimeout(() => {
                    counter.frameDown = scriptBossLv1[0].frameDown;
                    counter.frameUp = scriptBossLv1[0].frameUp;
                }, scriptBossLv1[0].time);
            }
            if (counter.frameUp > 0 && boss.y1 > 0) {
                boss.moveUp();
                counter.frameUp--;
                if (counter.frameUp <= 0) {
                    state.isUpdate = true;
                    Boss.gun();
                    scriptBossLv1.shift();
                }
            }
            if (counter.frameDown > 0 && boss.y2 < 560) {
                boss.moveDown();
                counter.frameDown--;
                if (counter.frameDown <= 0) {
                    state.isUpdate = true;
                    Boss.gun();
                    scriptBossLv1.shift();
                }
            }
            if (state.start) {
                if (boss.x1 > 800 && state.start) {
                    boss.moveLeft();
                } else {
                    state.isUpdate = true;
                    state.start = false;
                }
            }
            if (state.end) {
                if (boss.x1 < 960) {
                    boss.moveRight();
                } else {
                    boss.unMount(ScreenNode.node());
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
        end() {
            state.end = true;
        },
        gun() {
            boosGun();
        },
    };
})();

export default Boss;

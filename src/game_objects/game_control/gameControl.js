import animate from "../../animate/main.js";
import { getScript } from "../../script/level1.js";
import { scriptHouseLv1 } from "../../script/level1/scriptHouseLv1.js";
import Boss from "../boss/Boss.js";
import Shots from "../shots/shots.js";

const gameControl = (() => {
    let isBreak = false;
    const state = {
        start: [],
        loop: [],
        end: [],
        isStart: false,
        isEnd: false,
        level: 0,
        frame: 0,
        isBossStart: true,
    };
    const script = getScript();
    const start = () => {
        run(state.start);
    };
    const loop = () => {
        run(state.loop);
        if (scriptHouseLv1.length === 0 && state.isBossStart) {
            state.isBossStart = false;
            setTimeout(() => {
                Boss.start();
                setLoop([Boss.move, Shots.move]);
            }, 9000);
        }
    };
    const end = () => {
        state.loop = [];
        run(state.end);
    };
    const setLoop = (list) => {
        state.loop = list;
    };
    const setLevel = () => {
        state.start = script[state.level].start;
        state.loop = script[state.level].loop;
        state.end = script[state.level].end;
    };
    const moveUpLevel = () => {
        state.level++;
    };

    const run = (list) => {
        list.forEach((item) => {
            item();
        });
    };

    const main = () => {
        setLevel();
        start();
        requestAnimationFrame(animate);
    };

    return {
        start,
        loop,
        end,
        setLoop,
        setLevel,
        moveUpLevel,
        main,
        isBreak,
    };
})();

export default gameControl;

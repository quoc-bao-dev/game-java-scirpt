import animate from "../animate/main.js";
import { ScreenSpeed } from "../constants/contant.js";
import Bird from "../game_objects/bird/bird.js";
import Coins from "../game_objects/coins/coins.js";
import Game from "../game_objects/game/game.js";
import Planes from "../game_objects/planes/planes.js";
import Score from "../game_objects/score/score.js";
import Shots from "../game_objects/shots/shots.js";
import Walls from "../game_objects/walls/walls.js";
import Boss from "../game_objects/boss/Boss.js";
import { mainScript } from "../script/level1/mainScript.js";
import handleScript, { listenScript } from "./function.js";
import Trigger from "./trigger.js";
import ModalOver from "../ui_objects/modalOver.js";

const Control = (() => {
    //
    const state = {
        index: 0,
        isTrigger: true,
        isSetScript: true,
    };
    let curIndex = 0;
    let curDistant = 0;
    let curScript = {};
    const scripts = [...mainScript];
    const subscribers = [];
    const subscribe = (cb) => {
        const index = subscribers.indexOf(cb);
        if (index == -1) {
            subscribers.push(cb);
            console.log("Callback subscribed");
        } else {
            console.log("Callback is exist", `${cb}`);
        }
    };
    const unSubscibe = (cb) => {
        const index = subscribers.indexOf(cb);
        if (index !== -1) {
            subscribers.splice(index, 1);
            console.log("Callback was remove");
        } else {
            console.log("Callback not found in array.");
        }
        console.log(subscribers);
    };

    const setScript = () => {
        console.log("cur index", curIndex);
        curScript = scripts[curIndex];
        curIndex++;
    };

    const getCurScript = () => {
        return curScript;
    };

    const init = () => {
        console.log("run inti");
        //clear caches
        Bird.reset();
        Boss.reset();
        Walls.clear();
        Coins.clear();
        Planes.clear();
        Shots.clear();
        //start
        scripts.length = 0;
        scripts.push(...mainScript);
        curIndex = 0;
        curDistant = 0;
        curScript = scripts[curIndex];
        Bird.start();
        Score.init();
        Game.setIsPause(false);
        Game.setIsEnd(false);
    };
    const start = () => {
        init();
        requestAnimationFrame(animate);
    };
    const setTrigger = (val) => {
        state.isTrigger = val;
    };
    const setIsUpdateScript = (val) => {
        state.isSetScript = val;
    };
    const isUpdateScript = () => {
        return state.isSetScript;
    };

    const main = () => {
        // run to SET SCRIPT
        if (curScript.distant && curDistant < curScript.distant) {
            curDistant += ScreenSpeed.moveLeft;
        } else {
            if (!curScript.pendding && !curScript.boss) {
                curDistant = 0;
                setIsUpdateScript(true);
            }
        }
        if (state.isSetScript) {
            if (curIndex < scripts.length) {
                setScript();
                // handle script
                handleScript(curScript);
                state.isSetScript = false;
            } else {
                // Game Over

                Game.setIsEnd(true);
                ModalOver.set({ title: "You Win!!!", score: Score.getScore() });
                ModalOver.show();
            }
        }

        if (state.isTrigger) {
            Trigger.run();
            setTrigger(false);
        }

        //loop
        listenScript(curScript);
        subscribers.forEach((cb) => {
            cb();
        });
    };

    const end = () => {
        // clear all caches
    };

    return {
        init,
        start,
        end,
        main,
        subscribe,
        unSubscibe,
        setTrigger,
        getCurScript,
        setIsUpdateScript,
        isUpdateScript,
    };
})();

export default Control;

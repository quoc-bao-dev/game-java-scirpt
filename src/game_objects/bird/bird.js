import { BirdClass } from "../../class/Bird.js";
import { ScreenNode } from "../../constants/nodeElm.js";
import Game from "../game/game.js";

const Bird = (() => {
    const speedYDown = 2;
    const speedYUp = 2;
    const counter = {
        frame: 12,
        frameUp: 12,
        frameDown: 12,
    };

    const state = {
        heart: 4,
        immortal: false,
    };
    const bird = new BirdClass({
        id: "bird",
        x: 100,
        y: 200,
        width: 120,
        height: 50,
        speedY: speedYUp,
        speedDown: speedYDown,
    });
    const caches = {
        x: 100,
        y: 200,
    };
    bird.setStyle("backgroundColor", "#333");
    bird.setStyle("z-index", "333");
    bird.setStyle("transition", "transform 0.2s ease");
    return {
        reset() {
            bird.setCoor("x1", caches.x);
            bird.setCoor("y1", caches.y);
        },
        start() {
            state.heart = 4;
            state.immortal = false;
            bird.mount(ScreenNode.node());
        },
        move() {
            if (counter.frame < 12) {
                bird.jump();
                counter.frame++;
            }
            if (counter.frameUp < 12) {
                if (bird.y1 > 0) bird.moveUp();
                counter.frameUp++;
            }
            if (counter.frameDown < 12) {
                if (bird.y2 < 560) bird.moveDown();
                counter.frameDown++;
            }
            if (counter.frameDown == 12 && counter.frameUp == 12) {
                //sytle normal
                bird.node().classList.remove("rotate-45-up");
                bird.node().classList.remove("rotate-45-down");
            }
        },
        jump() {
            if (!Game.isPause()) counter.frame = 0;
        },
        moveUp() {
            if (!Game.isPause()) counter.frameUp = 0;
        },
        moveDown() {
            if (!Game.isPause()) counter.frameDown = 0;
        },
        speedUp() {
            bird.setSpeedY(5);
        },
        speedNormal() {
            bird.setSpeedY(speedYUp);
        },
        styleUp() {
            bird.node().classList.add("rotate-45-up");
        },
        styleDown() {
            bird.node().classList.add("rotate-45-down");
        },
        styleNor() {
            bird.setStyle("backgroundColor", "#333");
        },
        decHeart() {
            if (state.heart > 0) {
                state.heart--;
                state.immortal = true;
                bird.node().classList.add("fadein");
                bird.node().classList.add("animation-iteration-infinite");
                bird.node().classList.add("animation-duration-200");
                console.log("immortal");
                console.log(state.heart);

                setTimeout(() => {
                    state.immortal = false;
                    console.log("immortal end");
                    bird.node().classList.remove("fadein");
                    bird.node().classList.remove(
                        "animation-iteration-infinite"
                    );
                    bird.node().classList.remove("animation-duration-200");
                }, 1000);
            }
        },
        isImmortal() {
            return state.immortal;
        },
        getHeart() {
            return state.heart;
        },
        isDie() {
            return state.heart == 0;
        },
        getXY: () => bird.getXY(),
    };
})();

export default Bird;

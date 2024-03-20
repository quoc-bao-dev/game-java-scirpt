import { BirdClass } from "../../class/Bird.js";
import { ScreenNode, ScreenRect } from "../../constants/nodeElm.js";
import Game from "../game/game.js";

const Bird = (() => {
    const speedYDown = 2;
    const speedYUp = 2;
    const counter = {
        frame: 100,
        frameUp: 100,
        frameDown: 100,
    };
    const bird = new BirdClass({
        id: "bird",
        x: 100,
        y: 200,
        width: 50,
        height: 50,
        speedY: speedYUp,
        speedDown: speedYDown,
    });
    bird.setStyle("backgroundColor", "#333");
    bird.setStyle("z-index", "333");
    return {
        start() {
            bird.mount(ScreenNode.node());
        },
        move() {
            // if (bird.y2 < ScreenRect.height()) bird.down();
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
        getXY: () => bird.getXY(),
    };
})();

export default Bird;

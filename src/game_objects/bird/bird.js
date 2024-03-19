import { BirdClass } from "../../class/Bird.js";
import { ScreenNode, ScreenRect } from "../../constants/nodeElm.js";
import Game from "../game/game.js";

const Bird = (() => {
    const speedYDown = 1;
    const speedYUp = 2;
    const counter = {
        frame: 10,
    };
    const bird = new BirdClass({
        id: "bird",
        x: 20,
        y: 200,
        width: 50,
        height: 50,
        speedY: speedYUp,
        speedDown: speedYDown,
    });
    bird.setStyle("backgroundColor", "#333");
    return {
        start() {
            bird.mount(ScreenNode.node());
        },
        move() {
            if (bird.y2 < ScreenRect.height()) bird.down();
            if (counter.frame < 10) {
                bird.jump();
                counter.frame++;
            }
        },
        jump() {
            if (!Game.isPause()) counter.frame = 0;
        },
        getXY: () => bird.getXY(),
    };
})();

export default Bird;

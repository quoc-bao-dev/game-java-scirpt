import NewBird from "../class/Bird.js";
import { ScreenRect } from "../constants/contant.js";
import { BirdState } from "../store/store.js";
import { Walls } from "./Walls.js";
import { Coins } from "./Coins.js";
/**
 * update screen
 * in here, we handle logic to update screen when frame update 60fps
 */

const animate = () => {
    Coins.moveLeft();
    // Walls.moveLeft();
    if (NewBird.y2 < ScreenRect.height) {
        NewBird.down();
    }
    if (BirdState.frameCounter < 10) {
        BirdState.frameCounter++;
        NewBird.jump();
    }

    requestAnimationFrame(animate);
};

export default animate;

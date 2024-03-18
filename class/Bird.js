import { BirdSpeed } from "../constants/contant.js";
import { Block } from "./Block.js";
class Bird extends Block {
    constructor({ id, x, y, width, height, speedY }) {
        super({ id, x, y, width, height });
        this.speedY = speedY;
    }

    jump() {
        this.y1 -= this.speedY;
        this.updateCoordinates("y1");
        this.setStyle("top", this.y1 + "px");
    }

    down() {
        this.y1 += BirdSpeed.down;
        this.updateCoordinates("y1");
        this.setStyle("top", this.y1 + "px");
    }
}
const NewBird = new Bird({
    id: "#box",
    x: 10,
    y: 10,
    width: 30,
    height: 30,
    speedY: BirdSpeed.jump,
});
export default NewBird;

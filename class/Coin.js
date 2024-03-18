import { Pipe } from "./Pipe.js";

export class Coin extends Pipe {
    constructor({ id, x, y, width, height, speedX }) {
        super({ id, x, y, width, height, speedX });
    }
    earned(parentNode) {
        // handle UI
        this.unMount(parentNode);
    }
}

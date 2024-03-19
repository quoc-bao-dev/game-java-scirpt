import { PipeClass } from "./Pipe.js";

export class CoinClass extends PipeClass {
    constructor({ id, x, y, width, height, speedX }) {
        super({ id, x, y, width, height, speedX });
        this.isEarned = false;
    }
    earned(parentNode) {
        // handle UI
        this.unMount(parentNode);
    }
}

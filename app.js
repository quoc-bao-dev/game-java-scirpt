import NewBird from "./class/Bird.js";
import { keyboard } from "./event/keyboard.js";
import { Coins } from "./screen/Coins.js";
import { Walls } from "./screen/Walls.js";
import animate from "./screen/main.js";
import { mockAPI } from "./service/mockAPI.js";
import { mockCoinAPI } from "./service/mockCoinAPI.js";
import { BirdState } from "./store/store.js";

//handle key
const spaceKey = () => {
    BirdState.frameCounter = 0;
};
const enterKey = () => {
    NewBird.jump();
};

export const app = () => {
    Coins.render(mockCoinAPI);
    Walls.render(mockAPI);
    keyboard({ spaceKey, enterKey });
    requestAnimationFrame(animate);
};

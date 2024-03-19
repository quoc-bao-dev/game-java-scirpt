import { eventHandler } from "./function.js";
import { keyboard } from "./keyboard.js";
import { mouse } from "./mouse.js";

const enterKey = () => {};
const spaceKey = () => {
    eventHandler.birdJump();
};

export const initEvent = () => {
    mouse();
    keyboard({ enterKey, spaceKey });
};

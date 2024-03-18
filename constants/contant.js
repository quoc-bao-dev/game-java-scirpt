export const BirdSpeed = {
    jump: 2,
    down: 1,
};

export const ScreenSpeed = {
    moveLeft: 3,
};

export const ScreenNode = document.querySelector("#screen");

export const ScreenRect = {
    width: ScreenNode.getBoundingClientRect().width,
    height: ScreenNode.getBoundingClientRect().height,
};

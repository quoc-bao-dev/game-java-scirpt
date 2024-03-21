import Bird from "../game_objects/bird/bird.js";
import Score from "../game_objects/score/score.js";

export const initScript = {
    init: [Score.init, Bird.start],
};

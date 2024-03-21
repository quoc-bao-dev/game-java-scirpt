import Bird from "../game_objects/bird/bird.js";
import Game from "../game_objects/game/game.js";
import gameControl from "../game_objects/game_control/gameControl.js";
/**
 * update screen
 * in here, we handle logic to update screen when frame update 60fps
 */
const animate = () => {
    Bird.move();
    gameControl.loop();
    if (!Game.isPause()) requestAnimationFrame(animate);
};

export default animate;

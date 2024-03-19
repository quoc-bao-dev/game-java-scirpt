import Bird from "../game_objects/bird/bird.js";
import Coins from "../game_objects/coins/coins.js";
import Game from "../game_objects/game/game.js";
import Walls from "../game_objects/walls/walls.js";
/**
 * update screen
 * in here, we handle logic to update screen when frame update 60fps
 */

const animate = () => {
    Bird.move();
    Walls.move();
    Coins.move();
    if (!Game.isPause()) requestAnimationFrame(animate);
};

export default animate;

import Control from "../control/control.js";
import Game from "../game_objects/game/game.js";
/**
 * update screen
 * in here, we handle logic to update screen when frame update 60fps
 */
const animate = () => {
    Control.main();
    if (!Game.isPause() && !Game.isEnd()) requestAnimationFrame(animate);
};

export default animate;

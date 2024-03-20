import { House } from "../factory/buildObstacle.js";
import Bird from "../game_objects/bird/bird.js";
import Coins from "../game_objects/coins/coins.js";
import Game from "../game_objects/game/game.js";
import Planes from "../game_objects/planes/planes.js";
import Walls from "../game_objects/walls/walls.js";
import { Coin } from "../factory/buildReward.js";
import Boss from "../game_objects/boss/Boss.js";
import Shots from "../game_objects/shots/shots.js";
/**
 * update screen
 * in here, we handle logic to update screen when frame update 60fps
 */
let flash = true;
const animate = () => {
    if (flash) {
        flash = false;
        Boss.start();
        Coins.render([Coin.create()]);
        Coins.render([Coin.create()]);
        Coins.render([Coin.create()]);
        Coins.render([Coin.create()]);
        Coins.render([Coin.create()]);
        Coins.render([Coin.create()]);
        Coins.render([Coin.create()]);
        Coins.render([Coin.create()]);
        Coins.render([Coin.create()]);
        Walls.render([House.create()]);
        Walls.render([House.create()]);
        Walls.render([House.create()]);
    }

    Bird.move();
    Boss.move();
    Shots.move();
    // Planes.move();
    // Walls.move();
    // Coins.move();
    if (!Game.isPause()) requestAnimationFrame(animate);
};

export default animate;

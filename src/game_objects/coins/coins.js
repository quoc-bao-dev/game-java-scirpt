import { CoinClass } from "../../class/Coin.js";
import { ScreenRect } from "../../constants/nodeElm.js";
import { checkCollision } from "../../function/checkCollision.js";
import Bird from "../bird/bird.js";
import manage from "../manage/manage.js";
import Score from "../score/score.js";

const Coins = (() => {
    const loop = true;
    const base = manage();
    return {
        ...base,
        render(data) {
            data.forEach((item) => {
                const elm = new CoinClass(item);
                elm.setStyle("backgroundColor", "#fbbc07");
                base.mountElm(elm);
            });
        },
        move() {
            base.list.forEach((elm) => {
                elm.moveLeft();
                /// test loop
                if (loop && elm.x2 <= 0) elm.x1 = ScreenRect.width();
                if (checkCollision(elm.getXY(), Bird.getXY())) {
                    base.unMountElm(elm);
                    Score.increa();
                }
            });
        },
    };
})();

export default Coins;

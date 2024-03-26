import { ShotClass } from "../../class/Shot.js";
import checkBirdBeat from "../../function/checkBirdBeat.js";
import manage from "../manage/manage.js";

const Shots = (() => {
    const base = manage();

    return {
        ...base,
        logger() {
            console.log(base.list);
        },

        render(data) {
            data.forEach((item) => {
                const elm = new ShotClass(item);
                elm.setStyle("backgroundColor", "#323504");
                base.mountElm(elm);
            });
        },
        move() {
            base.list.forEach((elm) => {
                elm.moveLeft();
                if (elm.x2 < 0) {
                    base.unMountElm(elm);
                }
                if (elm.x1 < 400) {
                    checkBirdBeat(elm);
                }
            });
        },
    };
})();

export default Shots;

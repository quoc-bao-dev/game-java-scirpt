import { PipeClass } from "../../class/Pipe.js";
import { ScreenNode, ScreenRect } from "../../constants/nodeElm.js";

const Walls = (() => {
    /// test loop
    const loop = true;
    const listWall = [];
    const mountElm = (elm) => {
        elm.mount(ScreenNode.node());
        listWall.push(elm);
    };
    const unMountElm = (elm) => {
        elm.unMount(ScreenNode.node());
        for (let i = 0; i < listWall.length; i++) {
            if (listWall[i].id === elm.id) {
                listWall.splice(i, 1);
                break;
            }
        }
    };

    return {
        logger() {
            console.log(listWall);
        },
        render(data) {
            data.forEach((item) => {
                const elm = new PipeClass(item);
                elm.setStyle("backgroundColor", "#999");
                mountElm(elm);
            });
        },
        move() {
            listWall.forEach((elm) => {
                elm.moveLeft();
                /// test loop
                if (loop && elm.x2 < 0) elm.x1 = ScreenRect.width();
            });
        },
    };
})();

export default Walls;

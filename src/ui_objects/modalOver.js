import BlockUI from "../class/Block.UI.js";
import { ScreenNode } from "../constants/nodeElm.js";
import Game from "../game_objects/game/game.js";
import { Router } from "../routes/index.js";

const ModalOver = (() => {
    const block = new BlockUI({ id: "modal-over" });
    block.setZIndex(999);
    block.setClass("modal");
    block.setStyle("position", "absolute");

    const state = {
        title: `Game Over`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis, beatae.`,
        score: 0,
    };
    const child = (sc) => `
    <div
        class="absolute top-0 left-0 bottom-0 right-0 bg-black-alpha-40 flex justify-content-center align-items-center">
        <div class="alert-content p-5 bg-white shadow-1 border-round relative animation-delay-3000 zoomin">
        <div class="font-display text-center pt-2">JS Game</div>
        <h1 class="text-center">${state.title}</h1>
        <div class="pt-3 text-gray-500 line-height-3 px-4 flex justify-content-center align-items-center">
            <p class="get-score">${sc}</p>
        </div>
            <div class="pt-5">
                <div class="flex gap-3 w-fit mx-auto">
                    <div class="btn" id="restart-btn">Restart</div>
                    <div class="btn" id="home-btn">Home</div>
                </div>
            </div>
        </div>
    </div>`;
    block.setInner(child());

    const goHome = () => {
        Game.setIsEnd(false);
        Router.nav("/");
    };
    const restart = () => {
        console.log("restart");
    };
    const inintEvent = () => {
        block.node.querySelector("#home-btn").onclick = goHome;
        block.node.querySelector("#restart-btn").onclick = restart;
    };
    const close = () => {
        block.unMount(ScreenNode.node());
    };
    const show = () => {
        block.mount(ScreenNode.node());
        inintEvent();
    };
    const set = ({ title, content, score }) => {
        if (title) state.title = title;
        if (content) state.content = content;
        if (score) state.score = score;
        console.log("state", state.score);
        const childNode = child(state.score);
        console.log(childNode);
        block.setInner(childNode);
    };

    return {
        set,
        show,
        close,
    };
})();

export default ModalOver;

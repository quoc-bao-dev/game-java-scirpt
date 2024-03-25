import BlockUI from "../class/Block.UI.js";
import { ScreenNode } from "../constants/nodeElm.js";
import Game from "../game_objects/game/game.js";
import handleOutsideClick from "./function/handleClickOutSide.js";

const Menu = (() => {
    const block = new BlockUI({ id: "menu" });
    block.setZIndex(999);
    block.setClass("modal");
    block.setStyle("position", "absolute");
    const parentNode = ScreenNode.node();

    const state = {
        title: `Title `,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis, beatae.`,
    };
    // ScreenNode.node()
    const child = () => `
    <div
        class="absolute top-0 left-0 bottom-0 right-0 bg-black-alpha-40 flex justify-content-center align-items-center">
        <div class="alert-content p-5 bg-white shadow-1 border-round relative animation-delay-3000 zoomin">
            <div class="flex justify-content-end">
            <span class="p-2" id="close-alert-btn">
            <i class="fa-solid fa-x"></i>
            </span>
        </div>
            <h1 class="text-center">${state.title}</h1>
            <div class="font-display text-center pt-2">JS Game</div>
            <p class="pt-3 text-gray-500 line-height-3 px-4">${state.content}</p>
            <div class="pt-5">
                <div class="flex gap-3 w-fit mx-auto">
                    <div class="btn" id="restart-btn">Restart</div>
                    <div class="btn" id="play-btn">Play</div>
                </div>
            </div>
        </div>
    </div>`;
    block.setInner(child());

    const play = () => {
        Game.play();
        close();
    };
    const restart = () => {
        console.log("restart");
    };
    const inintEvent = () => {
        handleOutsideClick(block.node, ".alert-content", close);
        block.node
            .querySelector("#close-alert-btn")
            .addEventListener("click", () => {
                close();
            });
        block.node.querySelector("#play-btn").onclick = play;
        block.node.querySelector("#restart-btn").onclick = restart;
    };
    const close = () => {
        block.unMount(ScreenNode.node());
    };
    const show = () => {
        block.mount(ScreenNode.node());
        inintEvent();
    };
    const set = ({ title, content }) => {
        if (title) state.title = title;
        if (content) state.content = content;
        block.setInner(child());
    };

    return {
        set,
        show,
        close,
    };
})();

export default Menu;

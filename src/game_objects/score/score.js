import { getNode, scoreSelector } from "../../constants/nodeElm.js";

const Score = (() => {
    let score = 0;
    let scoreElm = getNode(scoreSelector);
    return {
        init() {
            scoreElm = getNode(scoreSelector);
            scoreElm.innerHTML = score;
        },
        increa() {
            score++;
            scoreElm.innerHTML = score;
        },
        decrea() {
            score--;
            scoreElm.innerHTML = score;
        },
        plus(value) {
            score += value;
            scoreElm.innerHTML = score;
        },
        minus(value) {
            score -= value;
            scoreElm.innerHTML = score;
        },
    };
})();

export default Score;

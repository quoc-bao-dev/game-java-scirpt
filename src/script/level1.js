import Coins from "../game_objects/coins/coins.js";
import Planes from "../game_objects/planes/planes.js";
import Walls from "../game_objects/walls/walls.js";

const script = [
    {
        chapter: "begin",
        start: [Walls.start],
        loop: [Walls.move, Coins.move, Planes.move],
        end: [Walls.end],
    },
];

export const getScript = () => {
    return script;
};

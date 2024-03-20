import { House } from "./src/factory/buildObstacle.js";

const list = [];

for (let i = 1; i < 20; i++) {
    list.push(House.create());
}

console.log(list);

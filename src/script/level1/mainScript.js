import { ScreenSpeed } from "../../constants/contant.js";

export const mainScript = [
    {
        triggers: ["birdMove"],
    },
    {
        pendding: true,
        coundown: {
            timer: 4,
            title: "Game Start",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quia corporis velit, saepe sapiente dolor expedita quis commodi id! Distinctio tempore, fugiat doloremque temporibus tenetur iure inventore porro sunt odit.",
        },
    },
    // {
    //     pendding: true,
    //     coundown: {
    //         timer: 3,
    //         title: "Game HappiHappiBee",
    //         message:
    //             "Game sẽ bắt đầu sau 3 giây",
    //     },
    // },
    {
        triggers: ["wallMove", "planeMove", "coinMove", "scoreSub"],
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            width: 100,
            height: 300,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-1",
            index: 1,
            score: null,
            width: 50,
            height: 50,
            x: 960, // FIXED
            y: 200,
        },
        plane: {
            index: 1,
            width: 185,
            height: 70,
            x: 960,
            y: 100,
            speedX: 4,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            width: 100,
            height: 500,
            x: 960,
            y: 560 - 500,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-2",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 200,
        },
        plane: {
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 100,
            speedX: 4,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-3",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 200,
        },
        plane: {
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 100,
            speedX: 4,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-4",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 200,
        },
        plane: {
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 100,
            speedX: 4,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-5",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 200,
        },
        plane: {
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 100,
            speedX: 4,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-6",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 200,
        },
        plane: {
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 100,
            speedX: 4,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-7",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 200,
        },
        plane: {
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 100,
            speedX: 4,
        },
    },
    {
        pendding: true,
        pause: {
            time: 5000,
        },
    },
    {
        pendding: true,
        coundown: {
            timer: 4,
            title: "Lorem ipsum",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quia corporis velit, saepe sapiente dolor expedita quis commodi id! Distinctio tempore, fugiat doloremque temporibus tenetur iure inventore porro sunt odit.",
        },
    },
    {
        triggers: ["wallUnSub", "coinUnSub", "planeUnSub"],
    },
    {
        triggers: ["bossStart", "shotMove"],
    },
    {
        // MOVE BOSS
        boss: {
            down: 100,
            left: 200,
        },
    },
    {
        boss: {
            stop: 30,
            up: 200,
            left: 100,
            gun: true,
        },
    },
    {
        boss: {
            stop: 30,
            up: 200,
            left: 300,
            gun: true,
        },
    },
    {
        boss: {
            stop: 15,
            down: 200,
            right: 250,
            gun: true,
        },
    },
    {
        boss: {
            stop: 10,
            down: 50,
            left: 50,
            gun: true,
        },
    },
    {
        boss: {
            stop: 20,
            up: 150,
            right: 100,
            gun: true,
        },
    },
    {
        boss: {
            stop: 15,
            down: 150,
            left: 100,
            gun: true,
        },
    },
    {
        boss: {
            stop: 15,
            up: 50,
            left: 200,
            gun: true,
        },
    },
    {
        boss: {
            stop: 15,
            down: 50,
            right: 100,
            gun: true,
        },
    },
    {
        boss: {
            stop: 5,
            down: 50,
            left: 80,
            gun: true,
        },
    },
    {
        boss: {
            stop: 10,
            up: 50,
            right: 50,
            gun: true,
        },
    },
    {
        boss: {
            up: 200,
            right: 100,
            gun: true,
        },
    },
    {
        boss: {
            stop: 10,
            up: 50,
            left: 50,
            gun: true,
        },
    },
    {
        boss: {
            stop: 10,
            up: 50,
            left: 50,
            gun: true,
        },
    },
    {
        boss: {
            down: 100,
            right: 100,
            gun: true,
        },
    },
    {
        boss: {
            stop: 10,
            up: 50,
            left: 50,
            gun: true,
        },
    },
    {
        boss: {
            down: 100,
            right: 80,
            gun: true,
        },
    },
    {
        boss: {
            stop: 10,
            up: 50,
            left: 50,
            gun: true,
        },
    },
    {
        boss: {
            right: 500,
        },
    },
    {
        triggers: ["bossUbSub", "shotUnSub"],
    },
];

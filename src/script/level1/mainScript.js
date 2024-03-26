import { ScreenSpeed } from "../../constants/contant.js";

export const mainScript = [
    {
        triggers: ["birdMove"],
    },
    // modal
    {
        pendding: true,
        coundown: {
            timer: 4,
            title: "Game Start",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quia corporis velit, saepe sapiente dolor expedita quis commodi id! Distinctio tempore, fugiat doloremque temporibus tenetur iure inventore porro sunt odit.",
        },
    },
    {
        triggers: ["wallMove", "planeMove", "coinMove", "scoreSub"],
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-1",
            width: 100,
            height: 300,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        coin: {
            id: "coin-1",
            index: 1,
            score: null,
            width: 50,
            height: 50,
            x: 990, // FIXED
            y: 130,
        },
        house: {
            id: "house-21",
            width: 100,
            height: 350,
            x: 960,
            y: 560 - 350,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-2",
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
    },

    {
        distant: 200 - ScreenSpeed.moveLeft * 2,

        coin: {
            id: "coin-2",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 250,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-3",
            width: 100,
            height: 300,
            x: 960,
            y: 560 - 300,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        coin: {
            id: "coin-4",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 100,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-5",
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
    },

    {
        distant: 200,
        coin: {
            id: "coin-4",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 200,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-61",
            width: 100,
            height: 250,
            x: 960,
            y: 560 - 250,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 300 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-63",
            width: 100,
            height: 280,
            x: 960,
            y: 560 - 280,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-6",
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-71",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 250,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-64",
            width: 100,
            height: 250,
            x: 960,
            y: 560 - 250,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-65",
            width: 100,
            height: 300,
            x: 960,
            y: 560 - 300,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-66",
            width: 100,
            height: 320,
            x: 960,
            y: 560 - 320,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-67",
            width: 100,
            height: 320,
            x: 960,
            y: 560 - 320,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 300 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-68",
            width: 100,
            height: 250,
            x: 960,
            y: 560 - 250,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-41",
            index: 0,
            score: 15000,
            width: 50,
            height: 50,
            x: 985,
            y: 200,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-7",
            width: 100,
            height: 320,
            x: 960,
            y: 560 - 320,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        coin: {
            id: "coin-69",
            index: 0,
            score: 25000,
            width: 50,
            height: 50,
            x: 985,
            y: 250,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-71",
            width: 100,
            height: 350,
            x: 960,
            y: 560 - 350,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        coin: {
            id: "coin-7",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 960,
            y: 200,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-72",
            width: 100,
            height: 380,
            x: 960,
            y: 560 - 380,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200 - ScreenSpeed.moveLeft * 2,
        house: {
            id: "house-8",
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-75",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 200,
        },
    },
    {
        distant: 1000,
    },
    {
        distant: 300,
        house: {
            id: "house-82",
            width: 100,
            height: 200,
            x: 960,
            y: 560 - 200,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-753",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 230,
        },
    },
    {
        distant: 300,

        plane: {
            id: "plane-1",
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 190,
            speedX: 5,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-821",
            width: 100,
            height: 350,
            x: 960,
            y: 560 - 350,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        plane: {
            id: "plane-12",
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 50,
            speedX: 5.5,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-813",
            width: 100,
            height: 400,
            x: 960,
            y: 560 - 400,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        plane: {
            id: "plane-1",
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 50,
            speedX: 5,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-813",
            width: 100,
            height: 400,
            x: 960,
            y: 560 - 400,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        coin: {
            id: "coin-743",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 230,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-812",
            width: 100,
            height: 300,
            x: 960,
            y: 560 - 300,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 300,
        house: {
            id: "house-813",
            width: 100,
            height: 400,
            x: 960,
            y: 560 - 400,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 300,
        house: {
            id: "house-814",
            width: 100,
            height: 320,
            x: 960,
            y: 560 - 320,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-743",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 190,
        },
    },
    {
        distant: 400,
    },
    {
        distant: 320,
        house: {
            id: "house-714",
            width: 100,
            height: 420,
            x: 960,
            y: 560 - 420,
            speedX: ScreenSpeed.moveLeft,
        },
        coin: {
            id: "coin-743",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 50,
        },
    },
    {
        distant: 200,
        plane: {
            id: "plane-1",
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 50,
            speedX: 11,
        },
    },
    {
        distant: 200,
        coin: {
            id: "coin-732",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 200,
        },
    },

    {
        distant: 320,
        coin: {
            id: "coin-680",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 200,
        },
    },
    {
        distant: 200,
        plane: {
            id: "plane-13",
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 150,
            speedX: 12,
        },
    },

    {
        distant: 200,

        house: {
            id: "house-714",
            width: 100,
            height: 350,
            x: 960,
            y: 560 - 350,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 300,
        coin: {
            id: "coin-65",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 200,
        },
    },
    {
        distant: 200,

        house: {
            id: "house-654",
            width: 100,
            height: 450,
            x: 960,
            y: 560 - 450,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,

        house: {
            id: "house-654",
            width: 100,
            height: 250,
            x: 960,
            y: 560 - 250,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 320,
        coin: {
            id: "coin-690",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 200,
        },
    },
    {
        distant: 200,

        house: {
            id: "house-55",
            width: 100,
            height: 250,
            x: 960,
            y: 560 - 250,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,

        house: {
            id: "house-57",
            width: 100,
            height: 320,
            x: 960,
            y: 560 - 320,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-57",
            width: 100,
            height: 380,
            x: 960,
            y: 560 - 380,
            speedX: ScreenSpeed.moveLeft,
        },
    },

    {
        distant: 200,
        coin: {
            id: "coin-450",
            index: 0,
            score: 20000,
            width: 50,
            height: 50,
            x: 985,
            y: 200,
        },
        plane: {
            id: "plane-144",
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 80,
            speedX: 12,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-527",
            width: 100,
            height: 380,
            x: 960,
            y: 560 - 380,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-332",
            width: 100,
            height: 350,
            x: 960,
            y: 560 - 350,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-98",
            width: 100,
            height: 370,
            x: 960,
            y: 560 - 370,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-938",
            width: 100,
            height: 360,
            x: 960,
            y: 560 - 360,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-928",
            width: 100,
            height: 420,
            x: 960,
            y: 560 - 420,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-9358",
            width: 100,
            height: 360,
            x: 960,
            y: 560 - 360,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        house: {
            id: "house-948",
            width: 100,
            height: 370,
            x: 960,
            y: 560 - 370,
            speedX: ScreenSpeed.moveLeft,
        },
    },
    {
        distant: 200,
        plane: {
            id: "plane-136",
            index: 0,
            width: 185,
            height: 70,
            x: 960,
            y: 3,
            speedX: 16,
        },
    },
    {
        distant: 200,
        coin: {
            id: "coin-1250",
            index: 1,
            score: null,
            width: 50,
            height: 50,
            x: 985,
            y: 200,
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
            right: 0,
            gun: true,
        },
    },
    {
        boss: {
            stop: 30,
            up: 200,
            right: 0,
            gun: true,
        },
    },
    {
        boss: {
            up: 200,
            right: 0,
            gun: true,
        },
    },
    {
        boss: {
            right: 400,
        },
    },
    {
        triggers: ["bossUbSub", "shotUnSub"],
    },
];

const allPatterns = [
    {
        id: "pattern1",
        name: "The Wave",
        difficulty: "easy",
        path: [0, 1, 2, 5, 8, 7, 6, 3],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern2",
        name: "The Diamond",
        difficulty: "easy",
        path: [1, 3, 7, 5],
        animation: {
            duration: 1800,
            delay: 400,
            loop: true
        }
    },
    {
        id: "pattern3",
        name: "The Zigzag",
        difficulty: "easy",
        path: [0, 4, 1, 5, 2, 6],
        animation: {
            duration: 2200,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern4",
        name: "The Spiral",
        difficulty: "easy",
        path: [0, 1, 2, 5, 4, 3, 6, 7, 8],
        animation: {
            duration: 2500,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern5",
        name: "The Hourglass",
        difficulty: "easy",
        path: [0, 2, 4, 6, 8],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern6",
        name: "The Star",
        difficulty: "easy",
        path: [0, 2, 8, 6],
        animation: {
            duration: 1800,
            delay: 400,
            loop: true
        }
    },
    {
        id: "pattern7",
        name: "The Butterfly",
        difficulty: "easy",
        path: [0, 4, 2, 5, 1, 3, 7, 8],
        animation: {
            duration: 2500,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern8",
        name: "The Chess Knight",
        difficulty: "easy",
        path: [1, 6, 0, 7, 2, 5, 8, 3],
        animation: {
            duration: 2800,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern9",
        name: "The Infinity",
        difficulty: "easy",
        path: [0, 3, 4, 5, 8, 7, 1],
        animation: {
            duration: 2300,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern10",
        name: "The Web",
        difficulty: "easy",
        path: [0, 1, 4, 7, 8, 5, 2],
        animation: {
            duration: 2600,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern11",
        name: "The Arrow",
        difficulty: "easy",
        path: [3, 1, 5, 4],
        animation: {
            duration: 1700,
            delay: 300,
            loop: true
        }
    },
    {
        id: "pattern12",
        name: "The Cross",
        difficulty: "easy",
        path: [0, 8, 2, 6, 4],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern13",
        name: "The Plus",
        difficulty: "easy",
        path: [1, 7, 3, 5],
        animation: {
            duration: 1900,
            delay: 400,
            loop: true
        }
    },
    {
        id: "pattern14",
        name: "The Square Dance",
        difficulty: "easy",
        path: [0, 1, 4, 3],
        animation: {
            duration: 2100,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern15",
        name: "The M",
        difficulty: "easy",
        path: [0, 3, 6, 4, 2, 5, 8],
        animation: {
            duration: 2400,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern16",
        name: "The W",
        difficulty: "easy",
        path: [6, 3, 0, 4, 8, 5, 2],
        animation: {
            duration: 2400,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern17",
        name: "The N",
        difficulty: "easy",
        path: [0, 3, 6, 7, 8, 5, 2],
        animation: {
            duration: 2300,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern18",
        name: "The Z",
        difficulty: "medium",
        path: [0, 1, 2, 4, 6, 7, 8],
        animation: {
            duration: 2200,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern19",
        name: "The V",
        difficulty: "medium",
        path: [0, 4, 8],
        animation: {
            duration: 1500,
            delay: 300,
            loop: true
        }
    },
    {
        id: "pattern20",
        name: "The X",
        difficulty: "medium",
        path: [0, 8, 4, 2, 6],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern21",
        name: "The Heartbeat",
        difficulty: "medium",
        path: [3, 0, 1, 4, 7, 8, 5, 2],
        animation: {
            duration: 2700,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern22",
        name: "The Lightning",
        difficulty: "medium",
        path: [2, 4, 6, 7, 5, 3, 1],
        animation: {
            duration: 2500,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern23",
        name: "The Maze",
        difficulty: "medium",
        path: [0, 3, 1, 4, 2, 5, 8, 7, 6],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern24",
        name: "The Slinky",
        difficulty: "medium",
        path: [0, 4, 8, 5, 1, 3, 7],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern25",
        name: "The Trident",
        difficulty: "medium",
        path: [1, 0, 3, 6, 7, 8, 5, 2],
        animation: {
            duration: 2600,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern26",
        name: "The Diamond Star",
        difficulty: "medium",
        path: [1, 0, 2, 4, 6, 8, 7, 5, 3],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern27",
        name: "The Double Helix",
        difficulty: "medium",
        path: [0, 4, 8, 7, 5, 2, 1, 3, 6],
        animation: {
            duration: 3200,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern28",
        name: "The Labyrinth",
        difficulty: "medium",
        path: [0, 1, 2, 5, 4, 7, 8, 6, 3],
        animation: {
            duration: 3500,
            delay: 1000,
            loop: true
        }
    },
    {
        id: "pattern29",
        name: "The Phoenix",
        difficulty: "medium",
        path: [6, 3, 0, 1, 4, 7, 8, 5, 2],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern30",
        name: "The Cyclone",
        difficulty: "medium",
        path: [4, 0, 1, 2, 5, 8, 7, 6, 3],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern31",
        name: "The Net",
        difficulty: "medium",
        path: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        animation: {
            duration: 3500,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern32",
        name: "The Weave",
        difficulty: "medium",
        path: [0, 4, 1, 5, 2, 3, 7, 8],
        animation: {
            duration: 3200,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern33",
        name: "The Ladder",
        difficulty: "medium",
        path: [0, 3, 1, 4, 2, 5],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern34",
        name: "The Bridge",
        difficulty: "medium",
        path: [0, 2, 4, 6, 8],
        animation: {
            duration: 2200,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern35",
        name: "The Gate",
        difficulty: "hard",
        path: [0, 6, 3, 7, 1, 8, 2],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern36",
        name: "The Enigma",
        difficulty: "hard",
        path: [0, 5, 1, 6, 2, 7, 3, 8, 4],
        animation: {
            duration: 3500,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern37",
        name: "The Serpent",
        difficulty: "hard",
        path: [0, 1, 4, 3, 6, 7, 5, 8],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern38",
        name: "The Compass",
        difficulty: "hard",
        path: [4, 1, 7, 3, 5, 0, 2, 6, 8],
        animation: {
            duration: 3200,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern39",
        name: "The Orbit",
        difficulty: "hard",
        path: [4, 0, 3, 6, 7, 8, 5, 2, 1],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern40",
        name: "The Circuit",
        difficulty: "hard",
        path: [0, 3, 4, 1, 2, 5, 8, 7, 6],
        animation: {
            duration: 3500,
            delay: 1000,
            loop: true
        }
    },
    {
        id: "pattern41",
        name: "The Wave 2.0",
        difficulty: "hard",
        path: [6, 7, 8, 5, 2, 1, 0, 3],
        animation: {
            duration: 2200,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern42",
        name: "The Diamond 2.0",
        difficulty: "hard",
        path: [3, 0, 2, 5, 8, 6, 4],
        animation: {
            duration: 2000,
            delay: 400,
            loop: true
        }
    },
    {
        id: "pattern43",
        name: "The Zigzag 2.0",
        difficulty: "hard",
        path: [6, 4, 7, 5, 8, 2],
        animation: {
            duration: 2400,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern44",
        name: "The Spiral 2.0",
        difficulty: "hard",
        path: [8, 7, 6, 3, 4, 5, 2, 1, 0],
        animation: {
            duration: 2700,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern45",
        name: "The Hourglass 2.0",
        difficulty: "hard",
        path: [8, 0, 4, 2, 6],
        animation: {
            duration: 2200,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern46",
        name: "The Star 2.0",
        difficulty: "hard",
        path: [8, 6, 0, 2],
        animation: {
            duration: 2000,
            delay: 400,
            loop: true
        }
    },
    {
        id: "pattern47",
        name: "The Butterfly 2.0",
        difficulty: "hard",
        path: [8, 4, 6, 3, 7, 5, 1, 0],
        animation: {
            duration: 2700,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern48",
        name: "The Chess Knight 2.0",
        difficulty: "hard",
        path: [7, 2, 8, 1, 6, 3, 0, 5],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern49",
        name: "The Infinity 2.0",
        difficulty: "hard",
        path: [8, 5, 4, 3, 0, 1, 7],
        animation: {
            duration: 2500,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern50",
        name: "The Web 2.0",
        difficulty: "hard",
        path: [8, 7, 4, 1, 0, 3, 6],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern51",
        name: "The Yin Yang",
        difficulty: "easy",
        path: [0, 4, 8, 5, 2, 1, 3, 6, 7],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern52",
        name: "The Comet",
        difficulty: "easy",
        path: [0, 1, 4, 7, 8],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern53",
        name: "The Trident V2",
        difficulty: "easy",
        path: [1, 4, 7, 0, 2],
        animation: {
            duration: 2200,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern54",
        name: "The Bowtie",
        difficulty: "easy",
        path: [0, 2, 4, 6, 8],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern55",
        name: "The Hourglass V2",
        difficulty: "easy",
        path: [2, 0, 4, 8, 6],
        animation: {
            duration: 2200,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern56",
        name: "The Ladder V2",
        difficulty: "easy",
        path: [2, 5, 1, 4, 0, 3],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern57",
        name: "The Bridge V2",
        difficulty: "easy",
        path: [1, 7, 4, 0, 2],
        animation: {
            duration: 2200,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern58",
        name: "The Cross V2",
        difficulty: "easy",
        path: [1, 3, 5, 7, 4],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern59",
        name: "The Plus V2",
        difficulty: "easy",
        path: [0, 8, 2, 6, 4],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern60",
        name: "The Square Dance V2",
        difficulty: "easy",
        path: [1, 2, 5, 4],
        animation: {
            duration: 2100,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern61",
        name: "The M V2",
        difficulty: "easy",
        path: [2, 5, 8, 4, 0, 3, 6],
        animation: {
            duration: 2400,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern62",
        name: "The W V2",
        difficulty: "easy",
        path: [8, 5, 2, 4, 6, 3, 0],
        animation: {
            duration: 2400,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern63",
        name: "The N V2",
        difficulty: "easy",
        path: [2, 5, 8, 7, 6, 3, 0],
        animation: {
            duration: 2300,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern64",
        name: "The Z V2",
        difficulty: "easy",
        path: [8, 7, 6, 4, 2, 1, 0],
        animation: {
            duration: 2200,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern65",
        name: "The V V2",
        difficulty: "easy",
        path: [2, 4, 6],
        animation: {
            duration: 1500,
            delay: 300,
            loop: true
        }
    },
    {
        id: "pattern66",
        name: "The X V2",
        difficulty: "easy",
        path: [1, 7, 4, 3, 5],
        animation: {
            duration: 2000,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern67",
        name: "The Heartbeat V2",
        difficulty: "medium",
        path: [5, 8, 7, 4, 1, 0, 3, 6],
        animation: {
            duration: 2700,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern68",
        name: "The Lightning V2",
        difficulty: "medium",
        path: [0, 4, 8, 7, 5, 3, 1],
        animation: {
            duration: 2500,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern69",
        name: "The Maze V2",
        difficulty: "medium",
        path: [8, 5, 7, 4, 6, 3, 0, 1, 2],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern70",
        name: "The Slinky V2",
        difficulty: "medium",
        path: [8, 4, 0, 3, 7, 5, 1],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern71",
        name: "The Trident V3",
        difficulty: "medium",
        path: [7, 4, 1, 0, 2, 5, 8],
        animation: {
            duration: 2600,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern72",
        name: "The Diamond Star V2",
        difficulty: "medium",
        path: [7, 8, 6, 4, 2, 0, 1, 3, 5],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern73",
        name: "The Double Helix V2",
        difficulty: "medium",
        path: [8, 4, 0, 1, 3, 6, 7, 5, 2],
        animation: {
            duration: 3200,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern74",
        name: "The Labyrinth V2",
        difficulty: "medium",
        path: [8, 7, 6, 3, 4, 1, 0, 2, 5],
        animation: {
            duration: 3500,
            delay: 1000,
            loop: true
        }
    },
    {
        id: "pattern75",
        name: "The Phoenix V2",
        difficulty: "medium",
        path: [2, 5, 8, 7, 4, 1, 0, 3, 6],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern76",
        name: "The Cyclone V2",
        difficulty: "medium",
        path: [4, 8, 7, 6, 3, 0, 1, 2, 5],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern77",
        name: "The Net V2",
        difficulty: "medium",
        path: [8, 7, 6, 5, 4, 3, 2, 1, 0],
        animation: {
            duration: 3500,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern78",
        name: "The Weave V2",
        difficulty: "medium",
        path: [8, 4, 6, 3, 1, 5, 7, 0],
        animation: {
            duration: 3200,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern79",
        name: "The Gate V2",
        difficulty: "medium",
        path: [2, 8, 5, 1, 7, 4, 0, 6],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern80",
        name: "The Enigma V2",
        difficulty: "medium",
        path: [4, 0, 5, 1, 6, 2, 7, 3, 8],
        animation: {
            duration: 3500,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern81",
        name: "The Serpent V2",
        difficulty: "hard",
        path: [8, 7, 4, 5, 2, 1, 3, 6, 0],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern82",
        name: "The Compass V2",
        difficulty: "hard",
        path: [4, 7, 1, 5, 3, 0, 2, 8, 6],
        animation: {
            duration: 3200,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern83",
        name: "The Orbit V2",
        difficulty: "hard",
        path: [4, 8, 5, 2, 1, 0, 3, 6, 7],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern84",
        name: "The Circuit V2",
        difficulty: "hard",
        path: [6, 3, 0, 1, 4, 7, 8, 5, 2],
        animation: {
            duration: 3500,
            delay: 1000,
            loop: true
        }
    },
    {
        id: "pattern85",
        name: "The Wave 3.0",
        difficulty: "hard",
        path: [3, 6, 7, 8, 5, 2, 1, 0],
        animation: {
            duration: 2200,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern86",
        name: "The Diamond 3.0",
        difficulty: "hard",
        path: [5, 2, 0, 3, 6, 8, 4],
        animation: {
            duration: 2000,
            delay: 400,
            loop: true
        }
    },
    {
        id: "pattern87",
        name: "The Zigzag 3.0",
        difficulty: "hard",
        path: [0, 4, 2, 5, 1, 3, 7, 8],
        animation: {
            duration: 2400,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern88",
        name: "The Spiral 3.0",
        difficulty: "hard",
        path: [2, 1, 0, 3, 6, 7, 8, 5, 4],
        animation: {
            duration: 2700,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern89",
        name: "The Hourglass 3.0",
        difficulty: "hard",
        path: [6, 2, 4, 0, 8],
        animation: {
            duration: 2200,
            delay: 500,
            loop: true
        }
    },
    {
        id: "pattern90",
        name: "The Star 3.0",
        difficulty: "hard",
        path: [6, 8, 2, 0],
        animation: {
            duration: 2000,
            delay: 400,
            loop: true
        }
    },
    {
        id: "pattern91",
        name: "The Butterfly 3.0",
        difficulty: "hard",
        path: [0, 4, 6, 3, 7, 5, 1, 2],
        animation: {
            duration: 2700,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern92",
        name: "The Chess Knight 3.0",
        difficulty: "hard",
        path: [1, 6, 0, 7, 2, 5, 8, 3],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern93",
        name: "The Infinity 3.0",
        difficulty: "hard",
        path: [0, 3, 4, 5, 8, 7, 1],
        animation: {
            duration: 2500,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern94",
        name: "The Web 3.0",
        difficulty: "hard",
        path: [0, 1, 4, 7, 8, 5, 2],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern95",
        name: "The Maze 3.0",
        difficulty: "hard",
        path: [0, 3, 1, 4, 2, 5, 8, 7, 6],
        animation: {
            duration: 3500,
            delay: 1000,
            loop: true
        }
    },
    {
        id: "pattern96",
        name: "The Slinky 3.0",
        difficulty: "hard",
        path: [0, 4, 8, 5, 1, 3, 7],
        animation: {
            duration: 2800,
            delay: 700,
            loop: true
        }
    },
    {
        id: "pattern97",
        name: "The Trident 4.0",
        difficulty: "hard",
        path: [1, 0, 3, 6, 7, 8, 5, 2],
        animation: {
            duration: 2600,
            delay: 600,
            loop: true
        }
    },
    {
        id: "pattern98",
        name: "The Diamond Star 3.0",
        difficulty: "hard",
        path: [1, 0, 2, 4, 6, 8, 7, 5, 3],
        animation: {
            duration: 3000,
            delay: 800,
            loop: true
        }
    },
    {
        id: "pattern99",
        name: "The Double Helix 3.0",
        difficulty: "hard",
        path: [0, 4, 8, 7, 5, 2, 1, 3, 6],
        animation: {
            duration: 3200,
            delay: 900,
            loop: true
        }
    },
    {
        id: "pattern100",
        name: "The Labyrinth 3.0",
        difficulty: "hard",
        path: [0, 1, 2, 5, 4, 7, 8, 6, 3],
        animation: {
            duration: 3500,
            delay: 1000,
            loop: true
        }
    }
];


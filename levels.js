export const Levels = {
    levels: [
        {
            map: [
                "######",
                "#....#",
                "#.B.G#",
                "#P...#",
                "#....#",
                "######"
            ],
            gridSize: 6
        },

        {
            map: [
                "######",
                "#.P..#",
                "###B.#",
                "#....#",
                "#G...#",
                "######"
            ],
            gridSize: 6
        },
        {
            map: [
                "#######",
                "#.....#",
                "#.P...#",
                "#..B..#",
                "####..#",
                "#G....#",
                "#######"
            ],
            gridSize: 7
        },
        {
            map: [
                "######",
                "#...P#",
                "#....#",
                "#GB..#",
                "#.BG.#",
                "######"
            ],
            gridSize: 6
        },
        {
            map: [
                "######",
                "#P..##",
                "#GBF.#",
                "#..#.#",
                "#....#",
                "######"
            ],
            gridSize: 6
        },
        {
            map: [
                "#######",
                "#.....#",
                "#.B#G.#",
                "#..F..#",
                "#..#..#",
                "#P.#..#",
                "#######"
            ],
            gridSize: 7
        },
        {
            map: [
                "#######",
                "#P...##",
                "#.BB..#",
                "#.#G.G#",
                "#.....#",
                "#######",
                "#######"
            ],
            gridSize: 7
        },
        {
            map: [
                "#######",
                "##...##",
                "#P.GB##",
                "#...B.#",
                "#.#G..#",
                "#.....#",
                "#######"
            ],
            gridSize: 7
        },
        {
            map: [
                "#######",
                "#GPF.##",
                "#B..B.#",
                "#...#.#",
                "#..G..#",
                "#######",
                "#######"
            ],
            gridSize: 7
        },
        {
            map: [
                "#######",
                "#PF..##",
                "#.B#..#",
                "#.B.G.#",
                "#G...##",
                "#######",
                "#######"
            ],
            gridSize: 7
        }
    ],

    map_to_html: (level) => {
        let output = '<div class="controls">R to reload and WASD to move</div>'
        let lineNumber = 0
        level.forEach((line) => {
            output += '<div class="row">'
            for(let i = 0; i < line.length; i++){
                switch(line.charAt(i)){
                    case "#":
                        output += '<div class="cell wall" id="' + i + "," + lineNumber + '"></div>'
                        break;
                    case "P":
                        output += '<div class="cell player" id="' + i + "," + lineNumber + '"></div>'
                        break;
                    case ".":
                        output += '<div class="cell" id="' + i + "," + lineNumber + '"></div>'
                        break;
                    case "B":
                        output += '<div class="cell box-red" id="' + i + "," + lineNumber + '"></div>'
                        break;
                    case "G":
                        output += '<div class="cell goal" id="' + i + "," + lineNumber + '"></div>'
                        break;
                    case "F":
                        output += '<div class="cell goal box-green" id="' + i + "," + lineNumber + '"></div>'
                        break;
                }
            }
            output += "</div>"
            lineNumber++
        });
    
        return output
    }
}
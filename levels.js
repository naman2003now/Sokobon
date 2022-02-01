export const Levels = {
    levels: [
        {
            map: [
                "######",
                "#.P..#",
                "###B.#",
                "#..#.#",
                "#G...#",
                "######"
            ],
            gridSize: 6
        }
    ],

    map_to_html: (level) => {
        let output = ""
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
                }
            }
            output += "</div>"
            lineNumber++
        });
    
        return output
    }
}
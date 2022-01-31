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
    
        level.forEach((line) => {
            output += '<div class="row">'
            for(let i = 0; i < line.length; i++){
                console.log(line.charAt(i))
                switch(line.charAt(i)){
                    case "#":
                        output += '<div class="cell wall"></div>'
                        break;
                    case "P":
                        output += '<div class="cell player"></div>'
                        break;
                    case ".":
                        output += '<div class="cell"></div>'
                        break;
                    case "B":
                        output += '<div class="cell box-red"></div>'
                        break;
                    case "G":
                        output += '<div class="cell goal"></div>'
                        break;
                }
            }
            output += "</div>"
        });
    
        return output
    }
}
export class BoardService {
    #players = [];
    #board = null;
    #actionList = {
        "PLACE_PLAYER" : this.do_placePlayer,
        "MOVE_PLAYER" : this.do_movePlayer,
        "REMOVE_PLAYER" : this.do_removePlayer,
        "CREATE_BOARD" : this.do_createBoard
    };
    constructor (board, players) {
        this.#board = board;
        this.#players = players;
    }

    do (data) {
        this.#actionList[data.type] (data.content);
    }

    do_placePlayer (players) {
        console.log("Se ha colocado un jugador");
        players[0].x = 0;
        players[0].y = 0;

    }

    do_movePlayer (content) {
        console.log("Se ha movido un jugador");
    }

    do_removePlayer (content) {
        console.log("Se ha eliminado un jugador");
    }

    do_createBoard (mapper) {
            console.log(mapper.map.size);
            const currentMap = [];
            for (let i = 0; i < mapper.map.size; i++) {
                const row = [];
                for (let j = 0; j < mapper.map.size; j++) {
                    //create the map
                    row.push(0);
                }
                currentMap.push(row);
                console.log(row);
            }
            
            mapper.map.elements.forEach(element => {
                currentMap[element.x][element.y] = 5;
            });
            console.log(currentMap);
    }
    
}
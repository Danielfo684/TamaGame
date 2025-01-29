export class GameService {
    #states = {
        WAITING : 0,
        PLAYING : 1,
        ENDED : 2
    };
    #players = [];
    // #board = null;
    #boardService = null;   
    #state = null;
    #actionsList = {
        "NEW_PLAYER" : this.do_newPlayer,
        "BOARD" : this.do_board,
        "ROOM" : this.do_room,
    };
    constructor(){
        this.#state = this.#states.WAITING;    
    }
    
    do (data) {
        this.#actionsList[data.type] (data.content)
    };

    do_newPlayer (content) {
        console.log("ha llegado un jugador nuevo");
    };
    
    do_board (content) {
        console.log(content);
    };
    do_room () {

    }
}
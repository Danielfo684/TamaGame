import { ConnectionHandler } from "../services/ConnectionHandler.js";
import { BoardUI } from "./BoardUI.js";

export const TamaGame = {
    init : ()  => {
        ConnectionHandler.init("http://localhost:3000", () => {
            console.log("conexión base finalizada")
        }, () => {
            console.log("all bad")
        });
    }
}




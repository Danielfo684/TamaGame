import { io } from "../../node_modules/socket.io-client/dist/socket.io.esm.min.js";
import { GameService } from "./GameService.js";

export const ConnectionHandler = {
    connected: false,
    socket: null,
    url: null,
    gameService: new GameService(),
    init: (url, onConnectedCallBack, onDisconnectedCallBack) => {
        let { socket } = ConnectionHandler; 
        socket = io(url);
       
        socket.on("connect", (data) => {
            socket.on("connectionStatus", (data) => {
                ConnectionHandler.connected = true;
                console.log(data);
                onConnectedCallBack();
            });
            socket.onAny((eventName, data) => {
                console.log("Conexión establecida");
                console.log(data);
                console.log(eventName);
                console.log("mensaje que recibo: " + data);
                // ConnectionHandler.gameService.do(data);
    
              });
            socket.on("ROOM", (payload) => {
                ConnectionHandler.gameService.do(payload);
            })
            socket.on("disconnect", () => {
                ConnectionHandler.connected = false;
                onDisconnectedCallBack();
            });
        })
    }
}
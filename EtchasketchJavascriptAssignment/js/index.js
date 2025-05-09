import { DrawingBoard } from "./models/DrawingBoard.js";
import { ListenerHelper } from "./helpers/ListenerHelper.js";

let drawingBoard = new DrawingBoard();
drawingBoard.initialize();
ListenerHelper.addListeners(drawingBoard);
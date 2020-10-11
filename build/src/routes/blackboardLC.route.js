"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blackboardLC_ctrl_1 = __importDefault(require("../controllers/blackboardLC.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/", blackboardLC_ctrl_1.default.index);
        this.router.get("/find/:FIND", blackboardLC_ctrl_1.default.find);
        this.router.get("/lc/:LC", blackboardLC_ctrl_1.default.findLC);
        this.router.get("/nrc/:NRC", blackboardLC_ctrl_1.default.findNRC);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

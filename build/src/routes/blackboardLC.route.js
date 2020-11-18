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
        this.router.get("/periodo/:periodo", blackboardLC_ctrl_1.default.findPeriodo);
        this.router.get("/periodo/:periodo/:cursoid", blackboardLC_ctrl_1.default.findPeridoCurso);
        this.router.get("/periodo/:periodo/nrc/:nrc", blackboardLC_ctrl_1.default.findPeridoNrc);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

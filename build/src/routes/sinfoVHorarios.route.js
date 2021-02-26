"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vhorarios_ctrl_1 = __importDefault(require("../controllers/sinfo/vhorarios.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/:periodo", vhorarios_ctrl_1.default.index);
        this.router.get("/:periodo/nrc/nrc", vhorarios_ctrl_1.default.findxNrc);
        this.router.get('/curso/:idcurso', vhorarios_ctrl_1.default.findxCurso);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

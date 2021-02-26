"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vinstenrolamiento_ctrl_1 = __importDefault(require("../controllers/sinfo/vinstenrolamiento.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/:periodo", vinstenrolamiento_ctrl_1.default.index);
        this.router.get("/:periodo/idInst/:idinst", vinstenrolamiento_ctrl_1.default.findxInst);
        this.router.get("/:periodo/nrc/:nrc", vinstenrolamiento_ctrl_1.default.findxNrc);
        this.router.get("/curso/:idcurso", vinstenrolamiento_ctrl_1.default.findxCurso);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

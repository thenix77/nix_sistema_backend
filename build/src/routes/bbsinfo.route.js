"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bbsinfo_ctrl_1 = __importDefault(require("../controllers/bbsinfo.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/:periodo/nrc/:nrc", bbsinfo_ctrl_1.default.findxNrc);
        this.router.get('/:periodo/alumno/:idalumno', bbsinfo_ctrl_1.default.findxAlumno);
        this.router.get('/:periodo/retiro', bbsinfo_ctrl_1.default.findxRetiro);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

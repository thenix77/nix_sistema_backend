"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vmatrnrc_ctrl_1 = __importDefault(require("../controllers/sinfo/vmatrnrc.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/:periodo", vmatrnrc_ctrl_1.default.index);
        this.router.get("/:periodo/nrc/:nrc", vmatrnrc_ctrl_1.default.findxNrc);
        this.router.get("/:periodo/alumno/:idalumno", vmatrnrc_ctrl_1.default.findxAlumno);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

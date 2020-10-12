"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sinfoVMatricula_ctrl_1 = __importDefault(require("../controllers/sinfoVMatricula.ctrl"));
const token_1 = require("../lib/token");
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/", sinfoVMatricula_ctrl_1.default.index);
        this.router.get("/idalumno/:idalumno", token_1.validationToken, sinfoVMatricula_ctrl_1.default.idalumno);
        this.router.get("/idcurso/:idcurso", token_1.validationToken, sinfoVMatricula_ctrl_1.default.idcurso);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

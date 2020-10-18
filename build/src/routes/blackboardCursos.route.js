"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blackboardCursos_ctrl_1 = __importDefault(require("../controllers/blackboardCursos.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/", blackboardCursos_ctrl_1.default.index);
        this.router.get("/periodo/:periodo", blackboardCursos_ctrl_1.default.cursosPeriodo);
        this.router.get("/periodo/:periodo/:curso", blackboardCursos_ctrl_1.default.cursosPeriodoCurso);
        this.router.get("/find/:curso", blackboardCursos_ctrl_1.default.cursosFind);
        this.router.get('/cantidadCursos', blackboardCursos_ctrl_1.default.cantidadCursos);
        this.router.get('/CantidadAlumnos', blackboardCursos_ctrl_1.default.cantidadAlumnos);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

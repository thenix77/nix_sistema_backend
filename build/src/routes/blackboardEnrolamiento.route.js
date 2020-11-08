"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blackboardEnrolamiento_ctrl_1 = __importDefault(require("../controllers/blackboardEnrolamiento.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/", blackboardEnrolamiento_ctrl_1.default.index);
        this.router.get("/periodo/:periodo", blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodo);
        this.router.get("/periodo/:periodo/:cursoid", blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodoCurso);
        this.router.get("/periodo/:periodo/curso/:cursoid/rol/:rol", blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodoCursoRol);
        this.router.get('/periodo/:periodo/rol/:rol', blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodoRol);
        this.router.get('/cursos', blackboardEnrolamiento_ctrl_1.default.enrolamientoCursos);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

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
        this.router.get("/periodo/:periodo/:idcurso", blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodoCurso);
        this.router.get("/periodo/:periodo/nrc/:nrc", blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodoNrc);
        this.router.get("/periodo/:periodo/idalumno/:idalumno", blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodoAlumno);
        this.router.get("/periodo/:periodo/nrcs/:nrcs", blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodoNrcs);
        //this.router.get("/periodo/:periodo/nrc/:nrc/rol/:rol", ctrl.enrolamientoPeriodoNrcRol)
        this.router.get('/periodo/:periodo/curso/:idcurso/alumno/:idalumno', blackboardEnrolamiento_ctrl_1.default.enrolamientoPeriodoCursoAlumno);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

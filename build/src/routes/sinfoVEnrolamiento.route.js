"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venrolamiento_1 = __importDefault(require("../controllers/sinfo/venrolamiento"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/:periodo", venrolamiento_1.default.index);
        this.router.get("/:periodo/idalumno/:idalumno", venrolamiento_1.default.BuscarxIdAlumno);
        this.router.get('/:periodo/nrc/:nrc', venrolamiento_1.default.BuscarxNrc);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

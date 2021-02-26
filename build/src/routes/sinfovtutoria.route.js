"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vtutoria_ctrl_1 = __importDefault(require("../controllers/sinfo/vtutoria.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/:periodo", vtutoria_ctrl_1.default.index);
        this.router.get("/:periodo/find/:id_alumno", vtutoria_ctrl_1.default.find);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

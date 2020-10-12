"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sinfoTutoria_ctrl_1 = __importDefault(require("../controllers/sinfoTutoria.ctrl"));
const token_1 = require("../lib/token");
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/", token_1.validationToken, sinfoTutoria_ctrl_1.default.index);
        this.router.get("/find/:id_alumno", token_1.validationToken, sinfoTutoria_ctrl_1.default.find);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

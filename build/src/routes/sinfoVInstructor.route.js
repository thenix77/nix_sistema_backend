"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sinfoInstructor_ctrl_1 = __importDefault(require("../controllers/sinfoInstructor.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/", sinfoInstructor_ctrl_1.default.index);
        this.router.get("/:instructor", sinfoInstructor_ctrl_1.default.findxInstructor);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

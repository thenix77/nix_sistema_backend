"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sinfo_ctrl_1 = __importDefault(require("../controllers/sinfo.ctrl"));
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.get();
        this.post();
    }
    get() {
        this.router.get("/", sinfo_ctrl_1.default.index);
        this.router.get("/FIND/:FIND", sinfo_ctrl_1.default.find);
        this.router.get("/LC/:LC", sinfo_ctrl_1.default.findLC);
        this.router.get("/NRC/:NRC", sinfo_ctrl_1.default.findNRC);
    }
    post() { }
}
const rutas = new Rutas();
exports.default = rutas.router;

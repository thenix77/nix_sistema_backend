"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vtutoria_data_1 = __importDefault(require("../../data/sinfo/vtutoria.data"));
class Ctrl {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const periodo = req.params.periodo;
            const rst = yield vtutoria_data_1.default.index(periodo);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_alumno = req.params.id_alumno;
            const periodo = req.params.periodo;
            const rst = yield vtutoria_data_1.default.find(periodo, id_alumno);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
}
const ctrl = new Ctrl();
exports.default = ctrl;

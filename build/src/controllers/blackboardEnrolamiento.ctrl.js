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
const blackboardEnrolamiento_data_1 = __importDefault(require("../data/blackboardEnrolamiento.data"));
class Ctrl {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rst = yield blackboardEnrolamiento_data_1.default.index();
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    enrolamientoCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield blackboardEnrolamiento_data_1.default.EnrolamientoCurso();
            return res.status(200).json({ length: cursos.length, data: cursos });
        });
    }
    enrolamientoPeriodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            const rst = yield blackboardEnrolamiento_data_1.default.EnrolamientoPeriodo(PERIODO);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    enrolamientoPeriodoCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            var CURSOID = req.params.cursoid;
            const rst = yield blackboardEnrolamiento_data_1.default.EnrolamientoPeriodoCurso(PERIODO, CURSOID);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    enrolamientoPeriodoCursoRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            var CURSOID = req.params.cursoid;
            var ROL = req.params.rol;
            const rst = yield blackboardEnrolamiento_data_1.default.EnrolamientoPeriodoCursoRol(PERIODO, CURSOID, ROL);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    enrolamientoPeriodoRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            var ROL = req.params.rol;
            const rst = yield blackboardEnrolamiento_data_1.default.EnrolamientoPeriodoRol(PERIODO, ROL);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
}
const ctrl = new Ctrl();
exports.default = ctrl;

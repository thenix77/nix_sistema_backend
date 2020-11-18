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
const blackboardCurso_data_1 = __importDefault(require("../data/blackboardCurso.data"));
class Ctrl {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const periodos = yield blackboardCurso_data_1.default.index();
            return res.status(200).json({ periodos });
        });
    }
    cursosPeriodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const PERIODO = req.params.periodo;
            const cursos = yield blackboardCurso_data_1.default.CursosPeriodo(PERIODO);
            return res.status(200).json({ length: cursos.length, cursos });
        });
    }
    cursosPeriodoCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const PERIODO = req.params.periodo;
            const CURSO = req.params.curso;
            const cursos = yield blackboardCurso_data_1.default.CursosPeriodoCurso(PERIODO, CURSO);
            return res.status(200).json({ length: cursos.length, cursos });
        });
    }
    cursosPeriodoNrc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const PERIODO = req.params.periodo;
            const NRC = req.params.nrc;
            const cursos = yield blackboardCurso_data_1.default.CursosPeriodoNrc(PERIODO, NRC);
            return res.status(200).json({ length: cursos.length, cursos });
        });
    }
}
const ctrl = new Ctrl();
exports.default = ctrl;

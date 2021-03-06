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
            var CURSOID = req.params.idcurso;
            const rst = yield blackboardEnrolamiento_data_1.default.EnrolamientoPeriodoCurso(PERIODO, CURSOID);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    enrolamientoPeriodoAlumno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            var IDALUMNO = req.params.idalumno;
            const rst = yield blackboardEnrolamiento_data_1.default.EnrolamientoPeriodoAlumno(PERIODO, IDALUMNO);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    enrolamientoPeriodoNrc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            var NRC = req.params.nrc;
            const rst = yield blackboardEnrolamiento_data_1.default.EnrolamientoPeriodoNrc(PERIODO, NRC);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    enrolamientoPeriodoNrcs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            var NRCs = req.params.nrcs;
            const rst = yield blackboardEnrolamiento_data_1.default.EnrolamientoPeriodoNrcs(PERIODO, NRCs);
            return res.status(200).json({ length: (rst) ? rst.length : 0, data: rst });
        });
    }
    enrolamientoPeriodoNrcRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            var NRC = req.params.nrc;
            let ROL = req.params.rol;
            const rst = yield blackboardEnrolamiento_data_1.default.enrolamientoPeriodoNrcRol(PERIODO, NRC, ROL);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    enrolamientoPeriodoCursoAlumno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var PERIODO = req.params.periodo;
            var IDCURSO = req.params.idcurso;
            let IDALUMNO = req.params.idalumno;
            const rst = yield blackboardEnrolamiento_data_1.default.enrolamientoPeriodoCursoAlumno(PERIODO, IDCURSO, IDALUMNO);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
}
const ctrl = new Ctrl();
exports.default = ctrl;

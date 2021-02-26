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
const sinfoVMatricula_data_1 = __importDefault(require("../data/sinfoVMatricula.data"));
class Ctrl {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rst = yield sinfoVMatricula_data_1.default.index();
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    idalumno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const IDALUMNO = req.params.idalumno;
            const rst = yield sinfoVMatricula_data_1.default.idAlumno(IDALUMNO);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    idInstructor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const IDINSTRUCTOR = req.params.idinstructor;
            const rst = yield sinfoVMatricula_data_1.default.idInstructor(IDINSTRUCTOR);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    Nrc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const NRC = req.params.nrc;
            const rst = yield sinfoVMatricula_data_1.default.Nrc(NRC);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    idcurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const IDCURSO = req.params.idcurso;
            const rst = yield sinfoVMatricula_data_1.default.idcurso(IDCURSO);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
    cantidadCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rst = yield sinfoVMatricula_data_1.default.cantidadCursos();
            return res.status(200).json({ length: rst });
        });
    }
    cantidadAlumnos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rst = yield sinfoVMatricula_data_1.default.cantidadAlumnos();
            return res.status(200).json({ length: rst });
        });
    }
    apexMatPeriodNrcs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const periodo = req.params.periodo;
            const nrcs = req.params.nrcs;
            const rst = yield sinfoVMatricula_data_1.default.sinfoMatPeriodoNrcs(periodo, nrcs);
            return res.status(200).json({ length: rst.length, data: rst });
        });
    }
}
const ctrl = new Ctrl();
exports.default = ctrl;

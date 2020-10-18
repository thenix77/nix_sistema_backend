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
Object.defineProperty(exports, "__esModule", { value: true });
const conection_1 = require("../database/conection");
class Data {
    constructor() {
        this.dbSinfo = conection_1.dbSinfo();
        this.dbBlackBoard = conection_1.dbBlackBoard();
        this.matriculas = [];
    }
    Consulta() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = "select * from vmatriculabb";
            const { rows } = yield this.dbSinfo.query(ssql);
            this.matriculas = rows;
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Consulta();
            return this.matriculas;
        });
    }
    idalumno(IDALUMNO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Consulta();
            const rst = this.matriculas.filter((data) => data.id_alumno.includes(IDALUMNO));
            return rst;
        });
    }
    idcurso(IDCURSO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Consulta();
            const rst = this.matriculas.filter((data) => data.id_curso.includes(IDCURSO));
            return rst;
        });
    }
    cantidadCursos() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = 'select distinct cursoid from vmatriculabb';
            const { rows } = yield this.dbSinfo.query(ssql);
            return rows.length;
        });
    }
    cantidadAlumnos() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = 'select distinct id_alumno from vmatriculabb';
            const { rows } = yield this.dbSinfo.query(ssql);
            return rows.length;
        });
    }
}
const data = new Data();
exports.default = data;

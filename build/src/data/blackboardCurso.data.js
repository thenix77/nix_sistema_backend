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
        this.cursos = [];
        this.term = [];
    }
    CursosBB() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = `select * from bb.cursos_enrolados`;
            const { rows } = yield this.dbBlackBoard.query(ssql);
            this.cursos = rows;
            return this.cursos;
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield this.CursosBB();
            return cursos;
        });
    }
    CursosPeriodo(PERIODO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.CursosBB();
            const rst = this.cursos.filter((data) => data.periodo === PERIODO);
            return rst;
        });
    }
    CursosPeriodoCurso(PERIODO, CURSOID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.CursosBB();
            const rst = this.cursos
                .filter((data) => data.periodo === PERIODO)
                .filter((data) => data.course_id === CURSOID.toUpperCase());
            return rst;
        });
    }
    CursosPeriodoNrc(PERIODO, NRC) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.CursosBB();
            const rst = this.cursos.filter(curso => curso.periodo === PERIODO)
                .filter((curso) => curso.course_id.substring(curso.course_id.indexOf('_') + 1, curso.course_id.length) === NRC);
            return rst;
        });
    }
}
const data = new Data();
exports.default = data;

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
        this.enrolamiento = [];
    }
    Enrolamiento() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = `select * from bb.vmatbb`;
            const { rows } = yield this.dbBlackBoard.query(ssql);
            this.enrolamiento = rows;
            return this.enrolamiento;
        });
    }
    consulta(periodo, nrcs) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = [];
            let newNrcs = nrcs.split(',');
            var setvs = (vs) => vs.map((v) => '$' + (values.push(v))).join();
            const ssql = "select * " +
                "from bb.vmatbb" +
                " where " +
                "       periodo like '" + periodo + "' and " +
                "       nrc in (" + setvs(newNrcs) + ")";
            const { rows } = yield this.dbSinfo.query(ssql, newNrcs);
            return rows;
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Enrolamiento();
        });
    }
    EnrolamientoPeriodo(PERIODO) {
        return __awaiter(this, void 0, void 0, function* () {
            let enrolamientos = yield this.Enrolamiento();
            return enrolamientos.filter(rs => rs.periodo === PERIODO);
        });
    }
    EnrolamientoPeriodoAlumno(PERIODO, IDALUMNO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Enrolamiento();
            const rst = this.enrolamiento
                .filter((dato) => dato.periodo === PERIODO)
                .filter((dato) => dato.batch_uid === IDALUMNO);
            return rst;
        });
    }
    EnrolamientoPeriodoCurso(PERIODO, CURSOID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Enrolamiento();
            const rst = this.enrolamiento
                .filter((dato) => dato.periodo === PERIODO)
                .filter((dato) => dato.course_id.trim() === CURSOID.trim());
            return rst;
        });
    }
    EnrolamientoPeriodoNrc(PERIODO, NRC) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Enrolamiento();
            const rst = yield this.enrolamiento
                .filter((dato) => dato.periodo === PERIODO)
                .filter((curso) => curso.course_id.substring(curso.course_id.indexOf('_') + 1, curso.course_id.length) === NRC);
            return rst;
        });
    }
    EnrolamientoPeriodoNrcs(PERIODO, NRCs) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consulta(PERIODO, NRCs);
        });
    }
    enrolamientoPeriodoNrcRol(PERIODO, NRC, ROL) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Enrolamiento();
            const rst = yield this.enrolamiento
                .filter((dato) => dato.periodo === PERIODO)
                .filter(dato => dato.role.toUpperCase() === ROL.toUpperCase())
                .filter((curso) => curso.course_id.includes(NRC));
            return rst;
        });
    }
    enrolamientoPeriodoCursoAlumno(periodo, idcurso, idalumno) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Enrolamiento();
            const rst = yield this.enrolamiento
                .filter((dato) => dato.periodo === periodo)
                .filter((dato) => dato.course_id === idcurso)
                .filter((curso) => curso.batch_uid === idalumno);
            return rst;
        });
    }
}
const data = new Data();
exports.default = data;

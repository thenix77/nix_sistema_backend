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
        this.term = [];
    }
    Enrolamiento() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = `select u.batch_uid ,u.email ,u.lastname ,u.firstname ,u.visible habilitado,e.visible visible,
                          ce.course_id ,ce.course_name , ce.periodo 
                    from bb.enrolamientos e 
                      inner join bb.usuarios u on u.pk1  = e.users_pk1 
                      inner join bb.cursos_enrolados ce on  ce.pk1 = e.curso_hijo_pk1 
                    where 
                    COURSE_ID NOT LIKE 'PATRON-%' AND 
                    COURSE_ID NOT LIKE 'PARCHE-%' AND 
                    COURSE_ID NOT LIKE '%INDUCCI%' AND 
                    COURSE_ID NOT LIKE '%-LC_%' AND 
                    COURSE_ID LIKE '%-NRC_%' AND 
                    U.batch_uid NOT LIKE '%_previewuser%' AND 
                    e.tipo in ('S','BB_FACILITATOR','Sup' )`;
            const { rows } = yield this.dbBlackBoard.query(ssql);
            this.enrolamiento = rows;
            return this.enrolamiento;
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
    EnrolamientoPeriodoCurso(PERIODO, CURSOID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Enrolamiento();
            const rst = this.enrolamiento
                .filter((dato) => dato.periodo === PERIODO)
                .filter((dato) => dato.course_id === CURSOID);
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
}
const data = new Data();
exports.default = data;

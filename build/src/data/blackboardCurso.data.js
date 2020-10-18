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
            const ssql = "SELECT CT.CRSMAIN_PK1, CM.COURSE_ID, TR.SOURCEDID_ID AS PERIODO_ID, TR.NAME AS PERIODO,  " +
                "to_char(CM.dtcreated,'DD/MM/YYYY') CREADO,  " +
                "to_char(CM.dtmodified,'DD/MM/YYYY') MODIFICADO,  " +
                "to_char(CM.START_DATE,'DD/MM/YYYY') INICIO, " +
                "to_char(CM.END_DATE,'DD/MM/YYYY') FIN, " +
                "CM.AVAILABLE_IND AS DISPONIBLE, CM.ROW_STATUS AS STATUS, CM.IS_CLOSED_IND AS CERRADO, " +
                "to_char(TR.START_DATE,'DD/MM/YYYY') PERIODO_INICIO,  " +
                "to_char(TR.END_DATE,'DD/MM/YYYY') PERIODO_FIN  " +
                "FROM COURSE_MAIN CM  INNER JOIN COURSE_TERM CT ON CM.PK1=CT.CRSMAIN_PK1 " +
                "INNER JOIN TERM TR ON CT.term_pk1 =TR.pk1";
            const { rows } = yield this.dbBlackBoard.query(ssql);
            this.cursos = rows;
            return this.cursos;
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = "SELECT name,sourcedid_id,start_date,end_date " +
                "from  term " +
                "where available_ind like 'Y'";
            const { rows } = yield this.dbBlackBoard.query(ssql);
            return (this.term = rows);
        });
    }
    CursosPeriodo(PERIODO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.CursosBB();
            const rst = this.cursos.filter((data) => data.periodo_id === PERIODO);
            return rst;
        });
    }
    CursosPeriodoCurso(PERIODO, CURSOID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.CursosBB();
            const rst = this.cursos
                .filter((data) => data.periodo_id === PERIODO)
                .filter((data) => data.course_id.includes(CURSOID.toUpperCase()));
            return rst;
        });
    }
    CursosFind(CURSOID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.CursosBB();
            const rst = this.cursos.filter((data) => data.course_id.includes(CURSOID.toUpperCase()));
            return rst;
        });
    }
    cantidadCursos() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = "select distinct course_id " +
                "from( " +
                "SELECT  u.batch_uid,u.user_id, u.firstname, u.lastname, u.student_id, u.email, cm.course_id, tr.sourcedid_id, cc.Role, u.row_status " +
                "from course_users cc " +
                "inner join Users U on cc.users_pk1 = U.pk1 " +
                "inner join Course_main cm on cc.crsmain_pk1 = cm.pk1 " +
                "inner join course_term ct on ct.crsmain_pk1 = cm.pk1 " +
                "inner join term tr on tr.pk1=ct.term_pk1 " +
                "where COURSE_ID NOT LIKE 'PATRON-%' AND COURSE_ID NOT LIKE '%INDUCCI%' AND u.batch_uid NOT LIKE '%_previewuser%' " +
                "AND COURSE_ID NOT LIKE '%-LC_%'  " +
                "order by cc.users_pk1) as bb " +
                "where sourcedid_id like '202020' and  course_id like '202020%' ";
            const { rows } = yield this.dbBlackBoard.query(ssql);
            return rows.length;
        });
    }
    cantidadAlumnos() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = "select distinct student_id " +
                "from( " +
                "SELECT  u.batch_uid,u.user_id, u.firstname, u.lastname, u.student_id, u.email, cm.course_id, tr.sourcedid_id, cc.Role, u.row_status " +
                "from course_users cc " +
                "inner join Users U on cc.users_pk1 = U.pk1 " +
                "inner join Course_main cm on cc.crsmain_pk1 = cm.pk1 " +
                "inner join course_term ct on ct.crsmain_pk1 = cm.pk1 " +
                "inner join term tr on tr.pk1=ct.term_pk1 " +
                "where COURSE_ID NOT LIKE 'PATRON-%' AND COURSE_ID NOT LIKE '%INDUCCI%' AND u.batch_uid NOT LIKE '%_previewuser%' " +
                "AND COURSE_ID NOT LIKE '%-LC_%'  " +
                "order by cc.users_pk1) as bb " +
                "where sourcedid_id like '202020' and  course_id like '202020%' ";
            const { rows } = yield this.dbBlackBoard.query(ssql);
            return rows.length;
        });
    }
}
const data = new Data();
exports.default = data;

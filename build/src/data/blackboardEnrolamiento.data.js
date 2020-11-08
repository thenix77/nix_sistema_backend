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
            const ssql = `
                  SELECT  u.batch_uid,u.user_id, u.firstname, u.lastname, u.student_id, u.email, cm.course_id, 
                          tr.sourcedid_id, cc.Role, u.row_status ,cc.available_ind habilitado 
                  from course_users cc 
                  inner join Users U on cc.users_pk1 = U.pk1 
                  inner join Course_main cm on cc.crsmain_pk1 = cm.pk1 
                  inner join course_term ct on ct.crsmain_pk1 = cm.pk1 
                  inner join term tr on tr.pk1=ct.term_pk1 
                  where 
                    COURSE_ID NOT LIKE 'PATRON-%' AND 
                    COURSE_ID NOT LIKE 'PARCHE-%' AND 
                    COURSE_ID NOT LIKE '%INDUCCI%' AND 
                    COURSE_ID NOT LIKE '%-LC_%' AND 
                    COURSE_ID LIKE '%-NRC_%' AND 
                    U.batch_uid NOT LIKE '%_previewuser%' AND 
                    CC.ROLE LIKE 'S' or 
                    cc.role like 'BB_FACILITATOR' or 
                    cc.role like 'Sup' 
	                order by cc.users_pk1`;
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
            let rst = yield this.Enrolamiento();
            return rst.filter(rs => rs.sourcedid_id === PERIODO);
        });
    }
    EnrolamientoPeriodoCurso(PERIODO, CURSOID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Enrolamiento();
            const rst = this.enrolamiento
                .filter((dato) => dato.sourcedid_id === PERIODO)
                .filter((dato) => dato.course_id.includes(CURSOID.toUpperCase()));
            return rst;
        });
    }
    EnrolamientoPeriodoCursoRol(PERIODO, CURSOID, ROL) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Enrolamiento();
            const rst = yield this.enrolamiento
                .filter((dato) => dato.sourcedid_id === PERIODO)
                .filter((dato) => dato.course_id.includes(CURSOID.toUpperCase()))
                .filter((dato) => dato.role.toUpperCase() === ROL.toUpperCase());
            return rst;
        });
    }
    EnrolamientoCurso() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = `SELECT  u.batch_uid,cm.course_id, tr.sourcedid_id, cc.Role, u.row_status 
                      from course_users cc
                      inner join Users U on cc.users_pk1 = U.pk1
                      inner join Course_main cm on cc.crsmain_pk1 = cm.pk1
                      inner join course_term ct on ct.crsmain_pk1 = cm.pk1
                      inner join term tr on tr.pk1=ct.term_pk1
                      where 
                        COURSE_ID NOT LIKE 'PATRON-%' AND 
                        COURSE_ID NOT LIKE 'PARCHE-%' AND 
                        COURSE_ID NOT LIKE '%INDUCCI%' AND 
                        COURSE_ID NOT LIKE '%-LC_%' AND 
                        COURSE_ID LIKE '202020%' AND
                        u.batch_uid NOT LIKE '%_previewuser%' 
                      order by cc.users_pk1`;
            const { rows } = yield this.dbBlackBoard.query(ssql);
            return rows;
        });
    }
    EnrolamientoPeriodoRol(periodo, rol) {
        return __awaiter(this, void 0, void 0, function* () {
            let rst = yield this.Enrolamiento();
            rst = rst.filter(r => r.role.toUpperCase() === rol.toUpperCase()).filter(x => x.sourcedid_id === periodo);
            return rst;
        });
    }
}
const data = new Data();
exports.default = data;

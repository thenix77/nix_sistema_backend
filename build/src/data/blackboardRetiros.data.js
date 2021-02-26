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
    }
    consulta(periodo) {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = `select  r.id_alumno , bb.course_id ,fretiro ,r.nombre ,
                        concat('USUARIO_PATCH-VisibleYN $token $URL_sitio externalId:',r.id_alumno ,' No') scriptAlumno, 
                        concat('ENROLAMIENTO_PATCH-Visibilidad $token $URL_sitio courseId:',bb.course_id ,' externalId:',bb.batch_uid ,' No') scriptCurso 
                        from sinfo.vretirados r 
                        inner join bb.vmatbb bb on bb.batch_uid = r.id_alumno 
                        where 	
                            bb."role" ='S' and 
                            --extract (month from r.fretiro) = extract (month from now())  and 
                            extract (month from r.fretiro) > 7  and
                            bb.usuariovisiblecurso like 'Y' 
                            and bb.periodo like $1`;
            const { rows } = yield this.dbBlackBoard.query(ssql, [periodo]);
            return rows;
        });
    }
    index(PERIODO) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consulta(PERIODO);
        });
    }
}
const data = new Data();
exports.default = data;

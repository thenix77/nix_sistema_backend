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
        this.ssql = `select   * , 
                           scriptusuario(id_alumno , id_curso , deuda , retirado , calificable ,  matriculable , usuarioenrolado, usuariovisible) script 
                           from matricula `;
    }
    generaIn(dato) {
        let values = [];
        let newDato = dato.split(',');
        var setvs = (vs) => vs.map((v) => '$' + (values.push(v))).join();
        return setvs(newDato);
    }
    consultaNrc(periodo, nrcs) {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = this.ssql +
                " where " +
                "       periodo like '" + periodo + "' " +
                "        and nrc in (" + this.generaIn(nrcs) + ") " +
                //  "        and usuariovisible like 'Y' "
                " order by nrc";
            const { rows } = yield this.dbSinfo.query(ssql, nrcs.split(','));
            return rows;
        });
    }
    consultaAlumno(periodo, idAlumno) {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = this.ssql +
                " where " +
                "       periodo like '" + periodo + "' " +
                "       and id_alumno in (" + this.generaIn(idAlumno) + ") " +
                " order by nrc";
            const { rows } = yield this.dbSinfo.query(ssql, idAlumno.split(','));
            return rows;
        });
    }
    consultaRetiro(periodo) {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = this.ssql +
                "  where " +
                "       periodo like $1 " +
                "       	and retirado like 'Y' " +
                "          and usuariovisible like 'Y' " +
                "  order by id_alumno,nrc";
            const { rows } = yield this.dbSinfo.query(ssql, [periodo]);
            return rows;
        });
    }
    findxNrc(PERIODO, NRC) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consultaNrc(PERIODO, NRC);
        });
    }
    findxIdAlumno(PERIODO, IDALUMNO) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consultaAlumno(PERIODO, IDALUMNO);
        });
    }
    findxRetiro(PERIODO) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consultaRetiro(PERIODO);
        });
    }
}
const data = new Data();
exports.default = data;

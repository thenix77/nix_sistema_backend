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
const conection_1 = require("../../database/conection");
class Data {
    constructor() {
        this.dbSinfo = conection_1.dbSinfo();
        this.dbBlackBoard = conection_1.dbBlackBoard();
    }
    consulta() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = 'select distinct * ' +
                '  from sinfo.vtutoria';
            const { rows } = yield this.dbSinfo.query(ssql);
            return rows;
        });
    }
    index(periodo) {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = yield this.consulta();
            const rst = ssql.filter((t) => t.periodo === periodo);
            return rst;
        });
    }
    find(periodo, id_alumno) {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = yield this.consulta();
            const rst = ssql.filter((t) => t.pk1 === periodo + '-' + id_alumno);
            return rst;
        });
    }
}
const data = new Data();
exports.default = data;

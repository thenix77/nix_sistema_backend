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
    consulta(periodo, nrcs) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = [];
            let newNrcs = nrcs.split(',');
            var setvs = (vs) => vs.map((v) => '$' + (values.push(v))).join();
            const ssql = "select * " +
                "from vmatbbsinfo" +
                " where " +
                "       periodo like '" + periodo + "' and " +
                "       nrc in (" + setvs(newNrcs) + ")";
            const { rows } = yield this.dbSinfo.query(ssql, newNrcs);
            return rows;
        });
    }
    index(PERIODO, NRCs) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consulta(PERIODO, NRCs);
        });
    }
}
const data = new Data();
exports.default = data;

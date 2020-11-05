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
        this.terms = [];
    }
    consulta() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = ` select  sourcedid_id ,name ,  start_date, end_date
                  from
                    term
                  where
                    name not like 'Patrón%' and
                    name not like 'PRUEBA%' and
                    name not like 'Inducción' 
                  order by sourcedid_id desc `;
            const { rows } = yield this.dbBlackBoard.query(ssql);
            this.terms = rows;
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.consulta();
            return this.terms;
        });
    }
}
const data = new Data();
exports.default = data;

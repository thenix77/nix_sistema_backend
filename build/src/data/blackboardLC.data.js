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
        this.listacruzadas = [];
    }
    ListaCruzada() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = `select  * from vlcruzada`;
            const { rows } = yield this.dbBlackBoard.query(ssql);
            return this.listacruzadas = rows;
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ListaCruzada();
        });
    }
    findPeriodo(PERIODO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ListaCruzada();
            const rst = this.listacruzadas.filter(lc => lc.periodo === PERIODO);
            return rst;
        });
    }
    findPeriodoCurso(PERIODO, CURSOID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.listacruzadas = yield this.index();
            return this.listacruzadas.filter(lc => lc.periodo === PERIODO)
                .filter(lc => lc.cursoid === CURSOID);
        });
    }
    findPeriodoFindNrc(PERIODO, NRC) {
        return __awaiter(this, void 0, void 0, function* () {
            this.listacruzadas = yield this.index();
            return this.listacruzadas.filter(lc => lc.periodo === PERIODO)
                .filter(curso => curso.cursoid.substring(curso.cursoid.indexOf('_') + 1, curso.cursoid.length) === NRC);
        });
    }
    findPeriodoListaCruzada(PERIODO, LC) {
        return __awaiter(this, void 0, void 0, function* () {
            this.listacruzadas = yield this.index();
            return this.listacruzadas.filter(lc => lc.periodo === PERIODO)
                .filter(lc => lc.lc_curso === LC);
        });
    }
}
const data = new Data();
exports.default = data;

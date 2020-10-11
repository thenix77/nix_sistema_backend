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
        this.lcnrc = [];
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = "select distinct cm1.course_Id padre,cm2.course_Id hijo " +
                "from course_users cu " +
                "left join course_main cm1 on cm1.pk1=crsmain_pk1 " +
                "left join course_main cm2 on cm2.pk1=child_crsmain_pk1 " +
                "where child_crsmain_pk1 is not null " +
                "order by padre, hijo";
            const { rows } = yield this.dbBlackBoard.query(ssql);
            this.lcnrc = rows;
            return this.lcnrc;
        });
    }
    findLC(LC) {
        return __awaiter(this, void 0, void 0, function* () {
            this.lcnrc = yield this.index();
            const rst = this.lcnrc.filter((data) => data.padre.includes(LC.toUpperCase()));
            return rst;
        });
    }
    findNRC(NRC) {
        return __awaiter(this, void 0, void 0, function* () {
            this.lcnrc = yield this.index();
            const rst = this.lcnrc.filter((data) => data.hijo.includes(NRC.toUpperCase()));
            console.log(rst);
            return rst;
        });
    }
    find(FIND) {
        return __awaiter(this, void 0, void 0, function* () {
            this.lcnrc = yield this.index();
            const rst = this.lcnrc.filter((data) => data.hijo.includes(FIND.toUpperCase()) ||
                data.padre.includes(FIND.toUpperCase()));
            return rst;
        });
    }
}
const data = new Data();
exports.default = data;

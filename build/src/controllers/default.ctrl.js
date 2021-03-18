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
class Ctrl {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ssql = 'grant SELECT any table ';
            const oracle = yield conection_1.dbOracle();
            const rs = yield oracle.execute(ssql);
            console.log('default');
            return res.status(200).json({ status: 'onLine', rs });
        });
    }
}
const ctrl = new Ctrl();
exports.default = ctrl;

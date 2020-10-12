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
const token_1 = require("../lib/token");
class Ctrl {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ID = parseInt(req.params.id);
            const token = yield token_1.token(ID);
            return res.status(200).json({ token });
        });
    }
    verificaToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.params.token;
            const expire = yield token_1.expireIn(token); // (await expireIn(token));
            return res.status(200).json({ expireIn: expire });
        });
    }
}
const ctrl = new Ctrl();
exports.default = ctrl;
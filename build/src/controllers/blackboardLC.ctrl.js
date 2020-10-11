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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blackboardLC_data_1 = __importDefault(require("../data/blackboardLC.data"));
class Ctrl {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lcnrc = yield blackboardLC_data_1.default.index();
            return res.status(200).json(lcnrc);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const FIND = req.params.FIND;
            const rst = yield blackboardLC_data_1.default.find(FIND);
            return res.status(200).json({ rst });
        });
    }
    findLC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const LC = req.params.LC;
            const rst = yield blackboardLC_data_1.default.findLC(LC);
            return res.status(200).json({ rst });
        });
    }
    findNRC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const NRC = req.params.NRC;
            const rst = yield blackboardLC_data_1.default.findNRC(NRC);
            return res.status(200).json({ rst });
        });
    }
}
const ctrl = new Ctrl();
exports.default = ctrl;

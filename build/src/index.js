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
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
//
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
//Rutas
const default_route_1 = __importDefault(require("./routes/default.route"));
const token_route_1 = __importDefault(require("./routes/token.route"));
const blackboardLC_route_1 = __importDefault(require("./routes/blackboardLC.route"));
const blackboardEnrolamiento_route_1 = __importDefault(require("./routes/blackboardEnrolamiento.route"));
const blackboardCursos_route_1 = __importDefault(require("./routes/blackboardCursos.route"));
const blackboardTerm_route_1 = __importDefault(require("./routes/blackboardTerm.route"));
const blackboardRetiros_route_1 = __importDefault(require("./routes/blackboardRetiros.route"));
const sinfoSupervisores_route_1 = __importDefault(require("./routes/sinfoSupervisores.route"));
/** */
const sinfovcurso_route_1 = __importDefault(require("./routes/sinfovcurso.route"));
const sinfoVEnrolamiento_route_1 = __importDefault(require("./routes/sinfoVEnrolamiento.route"));
const sinfoVhorarios_route_1 = __importDefault(require("./routes/sinfoVhorarios.route"));
const sinfoVInstEnrolamiento_route_1 = __importDefault(require("./routes/sinfoVInstEnrolamiento.route"));
const sinfoVMatNrc_route_1 = __importDefault(require("./routes/sinfoVMatNrc.route"));
const sinfoVInstructor_route_1 = __importDefault(require("./routes/sinfoVInstructor.route"));
const sinfoVPeriodo_route_1 = __importDefault(require("./routes/sinfoVPeriodo.route"));
const sinfovtutoria_route_1 = __importDefault(require("./routes/sinfovtutoria.route"));
class Server {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.config();
        this.middleware();
        this.rutas();
    }
    config() {
        this.app.set("port", process.env.PORT || this.port || 4000);
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use(helmet_1.default());
        this.app.use(compression_1.default());
        this.app.use(cors_1.default({
            origin: "*",
            methods: "GET,PUT,POST",
            allowedHeaders: "X-Requested-With,content-type,token",
            credentials: true,
        }));
    }
    rutas() {
        this.app.use('/', default_route_1.default);
        this.app.use("/auth/token", token_route_1.default);
        this.app.use("/BB/ListasCruzadas", blackboardLC_route_1.default);
        this.app.use("/BB/Enrolamiento", blackboardEnrolamiento_route_1.default);
        this.app.use("/BB/Cursos", blackboardCursos_route_1.default);
        this.app.use("/BB/Term", blackboardTerm_route_1.default);
        this.app.use("/BB/Retiros", blackboardRetiros_route_1.default);
        this.app.use('/sinfo/supervisores', sinfoSupervisores_route_1.default);
        /** */
        this.app.use('/sinfo/vista/cursos', sinfovcurso_route_1.default);
        this.app.use('/sinfo/vista/enrolamiento', sinfoVEnrolamiento_route_1.default);
        this.app.use('/sinfo/vista/horarios', sinfoVhorarios_route_1.default);
        this.app.use('/sinfo/vista/instenrolamiento', sinfoVInstEnrolamiento_route_1.default);
        this.app.use("/sinfo/vista/instructores", sinfoVInstructor_route_1.default);
        this.app.use("/sinfo/vista/matrnrc", sinfoVMatNrc_route_1.default);
        this.app.use('/sinfo/vista/periodos', sinfoVPeriodo_route_1.default);
        this.app.use('/sinfo/vista/tutoria', sinfovtutoria_route_1.default);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get("port"));
            console.log(`${colors_1.default.yellow("server> ")} ESTADO DEL SERVIDOR ${colors_1.default.red("UP")}`);
            console.log(`${colors_1.default.yellow("server> ")} PUERTO ${colors_1.default.red(this.app.get("port"))}`);
        });
    }
}
exports.default = Server;

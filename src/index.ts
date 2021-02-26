import express from "express";
import color from "colors";

//
import cors from "cors";
import helmet from 'helmet'
import compression from 'compression'


//Rutas
import defaultRoute from './routes/default.route'

import tokenRoute from "./routes/token.route";

import blackboardLCRoute from "./routes/blackboardLC.route";
import blackboardEnrolamientoRoute from "./routes/blackboardEnrolamiento.route";
import blackboardCursosRoute from "./routes/blackboardCursos.route";
import blackboardTermRoute from "./routes/blackboardTerm.route";
import blackboardRetirosRoute from './routes/blackboardRetiros.route'


import sinfoSupervisoresRoute from './routes/sinfoSupervisores.route'

/** */
import sinfoVCursoRoute from './routes/sinfovcurso.route'
import sinfoVEnrolamientoRoute from './routes/sinfoVEnrolamiento.route'
import sinfoVHorariosRoute from './routes/sinfoVhorarios.route'
import sinfoVInstEnrolamientoRoute from './routes/sinfoVInstEnrolamiento.route'
import sinfoVMatrNrcRoute from './routes/sinfoVMatNrc.route'
import sinfoVInstructorRoute from './routes/sinfoVInstructor.route'
import sinfoVPeriodoRoute from './routes/sinfoVPeriodo.route'
import sinfoVTutoriaRoute from "./routes/sinfovtutoria.route"

class Server {
  app: express.Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.config();
    this.middleware();
    this.rutas();
  }

  private config() {
    this.app.set("port",  process.env.PORT || this.port || 4000);
  }

  private middleware() {
    this.app.use(express.json());
    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(
      cors({
        origin: "*",
        methods: "GET,PUT,POST",
        allowedHeaders: "X-Requested-With,content-type,token",
        credentials: true,
      })
    );
  }

  private rutas() {

    this.app.use('/', defaultRoute)

    this.app.use("/auth/token", tokenRoute);

    this.app.use("/BB/ListasCruzadas", blackboardLCRoute);
    this.app.use("/BB/Enrolamiento", blackboardEnrolamientoRoute);
    this.app.use("/BB/Cursos", blackboardCursosRoute);
    this.app.use("/BB/Term", blackboardTermRoute);
    this.app.use("/BB/Retiros", blackboardRetirosRoute);
   
    this.app.use('/sinfo/supervisores' , sinfoSupervisoresRoute)
   
    /** */
    this.app.use('/sinfo/vista/cursos', sinfoVCursoRoute)
    this.app.use('/sinfo/vista/enrolamiento', sinfoVEnrolamientoRoute)
    this.app.use('/sinfo/vista/horarios', sinfoVHorariosRoute)
    this.app.use('/sinfo/vista/instenrolamiento', sinfoVInstEnrolamientoRoute)
    this.app.use("/sinfo/vista/instructores", sinfoVInstructorRoute)
    this.app.use("/sinfo/vista/matrnrc", sinfoVMatrNrcRoute)
    this.app.use('/sinfo/vista/periodos', sinfoVPeriodoRoute)
    this.app.use('/sinfo/vista/tutoria', sinfoVTutoriaRoute)
  }

  async start() {
    await this.app.listen(this.app.get("port"));
    console.log(
      `${color.yellow("server> ")} ESTADO DEL SERVIDOR ${color.red("UP")}`
    );
    console.log(
      `${color.yellow("server> ")} PUERTO ${color.red(this.app.get("port"))}`
    );
  }
}

export default Server;

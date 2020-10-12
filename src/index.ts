import express from "express";
import color from "colors";

//Rutas
import tokenRoute from "./routes/token.route";

import blackboardLCRoute from "./routes/blackboardLC.route";
import blackboardEnrolamientoRoute from "./routes/blackboardEnrolamiento.route";
import blackboardCursosRoute from "./routes/blackboardCursos.route";
import blackboardTermRoute from "./routes/blackboardTerm.route";

import sinfoTutoriaRoute from "./routes/sinfoTutoria.route";
import sinfoVMatriculaRoute from "./routes/sinfoVMatricula.route";

class Server {
  app: express.Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.config();
    this.rutas();
  }

  private config() {
    this.app.set("port", this.port || process.env.PORT || 4000);
  }

  private rutas() {
    this.app.use("/auth/token", tokenRoute);

    this.app.use("/BB/ListasCruzadas", blackboardLCRoute);
    this.app.use("/BB/Enrolamiento", blackboardEnrolamientoRoute);
    this.app.use("/BB/Cursos", blackboardCursosRoute);
    this.app.use("/BB/Term", blackboardTermRoute);

    this.app.use("/sinfo/tutoria", sinfoTutoriaRoute);
    this.app.use("/sinfo/matricula", sinfoVMatriculaRoute);
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

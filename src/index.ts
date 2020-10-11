import express from "express";
import color from "colors";

//Rutas
import blackboardLCRoute from "./routes/blackboardLC.route";
import blackboardEnrolamientoRoute from "./routes/blackboardEnrolamiento.route";

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
    this.app.use("/BB/ListasCruzadas", blackboardLCRoute);
    this.app.use("/BB/Enrolamiento", blackboardEnrolamientoRoute);
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

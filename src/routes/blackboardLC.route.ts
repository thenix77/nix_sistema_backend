import { Router } from "express";
import ctrl from "../controllers/blackboardLC.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", ctrl.index);
    this.router.get("/periodo/:periodo", ctrl.findPeriodo);
    this.router.get("/periodo/:periodo/:cursoid", ctrl.findPeridoCurso);
    this.router.get("/periodo/:periodo/nrc/:nrc", ctrl.findPeridoNrc);
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

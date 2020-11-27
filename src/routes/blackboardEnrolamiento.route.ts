import { Router } from "express";
import ctrl from "../controllers/blackboardEnrolamiento.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", ctrl.index)
    this.router.get("/periodo/:periodo", ctrl.enrolamientoPeriodo)
    this.router.get("/periodo/:periodo/:cursoid", ctrl.enrolamientoPeriodoCurso)
    this.router.get("/periodo/:periodo/nrc/:nrc", ctrl.enrolamientoPeriodoNrc)
    this.router.get("/periodo/:periodo/nrcs/:nrcs", ctrl.enrolamientoPeriodoNrcs)
    this.router.get("/periodo/:periodo/nrc/:nrc/rol/:rol", ctrl.enrolamientoPeriodoNrcRol)
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

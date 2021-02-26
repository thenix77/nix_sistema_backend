import { Router } from "express";
import ctrl from "../controllers/sinfo/vinstenrolamiento.ctrl"

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/:periodo", ctrl.index);
    this.router.get("/:periodo/idInst/:idinst", ctrl.findxInst);
    this.router.get("/:periodo/nrc/:nrc", ctrl.findxNrc)
    this.router.get("/curso/:idcurso", ctrl.findxCurso)
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
import { Router } from "express";
import ctrl from "../controllers/sinfo/vcursos.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/:periodo", ctrl.index);
    this.router.get('/:periodo/nrc/:nrc', ctrl.findxNrc)
    this.router.get('/:periodo/idcurso/:idCurso', ctrl.findxCurso)
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
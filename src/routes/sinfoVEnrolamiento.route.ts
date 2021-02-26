import { Router } from "express";
import ctrl from "../controllers/sinfo/venrolamiento";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/:periodo", ctrl.index);
    this.router.get("/:periodo/idalumno/:idalumno", ctrl.BuscarxIdAlumno);
    this.router.get('/:periodo/nrc/:nrc', ctrl.BuscarxNrc)
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
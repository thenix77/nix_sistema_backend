import { Router } from "express";
import ctrl from "../controllers/sinfo/vhorarios.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/:periodo", ctrl.index)
    this.router.get("/:periodo/nrc/nrc", ctrl.findxNrc)
 
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
import { Router } from "express";
import ctrl from "../controllers/public/instructores.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/:periodo/nrc/:nrc", ctrl.findxNrc);
    this.router.get("/:periodo/instructor/:idinstructor", ctrl.findxInstructor);
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
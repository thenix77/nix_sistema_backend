import { Router } from "express";
import ctrl from "../controllers/blackboadRetiros.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/:periodo", ctrl.index);
   
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
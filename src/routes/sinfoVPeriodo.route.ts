import { Router } from "express";
import ctrl from "../controllers/sinfo/vperiodo.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", ctrl.index);
   
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
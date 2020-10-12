import { Router } from "express";
import ctrl from "../controllers/token.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/genera/:id", ctrl.index);
    this.router.get("/verificar/:token", ctrl.verificaToken);
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

import { Router } from "express";
import ctrl from "../controllers/sinfoVZonal.ctrl";
import { validationToken } from "../lib/token";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", ctrl.index);
    this.router.get('/supervisores', ctrl.supervisores)
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
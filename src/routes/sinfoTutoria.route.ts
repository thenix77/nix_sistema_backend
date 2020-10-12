import { Router } from "express";
import ctrl from "../controllers/sinfoTutoria.ctrl";
import { validationToken } from "../lib/token";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", validationToken, ctrl.index);
    this.router.get("/find/:id_alumno", validationToken, ctrl.find);
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

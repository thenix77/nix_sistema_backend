import { Router } from "express";
import ctrl from '../controllers/sinfo/vtutoria.ctrl'
import { validationToken } from "../lib/token";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/:periodo",  ctrl.index);
    this.router.get("/:periodo/find/:id_alumno", ctrl.find);
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
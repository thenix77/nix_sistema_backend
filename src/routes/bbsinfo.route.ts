import { Router } from "express";
import ctrl from "../controllers/bbsinfo.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
  
    this.router.get("/:periodo/nrc/:nrc", ctrl.findxNrc);
    this.router.get('/:periodo/alumno/:idalumno' , ctrl.findxAlumno)
    this.router.get('/:periodo/retiro' , ctrl.findxRetiro)
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

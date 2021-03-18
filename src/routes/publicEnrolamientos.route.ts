import { Router } from "express";
import ctrl from "../controllers/public/enrolamientos.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get('/:periodo/nrc/:nrc', ctrl.findxNrc);
    this.router.get('/:periodo/alumno/:idalumno', ctrl.findxIdAlumno)
   
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
import { Router } from "express";
import ctrl from "../controllers/blackboardCursos.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", ctrl.index);
    this.router.get("/periodo/:periodo", ctrl.cursosPeriodo);
    this.router.get("/periodo/:periodo/:curso", ctrl.cursosPeriodoCurso);
    this.router.get("/find/:curso", ctrl.cursosFind);
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

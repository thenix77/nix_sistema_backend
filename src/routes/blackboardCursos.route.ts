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
    this.router.get("/:periodo", ctrl.cursosPeriodo);
    this.router.get("/:periodo/curso/:curso", ctrl.cursosPeriodoCurso);
    this.router.get("/:periodo/nrc/:nrc", ctrl.cursosPeriodoNrc);
  
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

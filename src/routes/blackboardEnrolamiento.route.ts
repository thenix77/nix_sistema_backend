import { Router } from "express";
import ctrl from "../controllers/blackboardEnrolamiento.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", ctrl.index)
    this.router.get("/periodo/:periodo", ctrl.enrolamientoPeriodo)
    this.router.get("/periodo/:periodo/:cursoid",ctrl.enrolamientoPeriodoCurso)
    this.router.get("/periodo/:periodo/curso/:cursoid/rol/:rol", ctrl.enrolamientoPeriodoCursoRol)
    this.router.get('/periodo/:periodo/rol/:rol', ctrl.enrolamientoPeriodoRol)
    this.router.get('/cursos' , ctrl.enrolamientoCursos)
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

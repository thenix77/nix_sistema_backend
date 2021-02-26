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
    this.router.get("/periodo/:periodo/:idcurso", ctrl.enrolamientoPeriodoCurso)
    this.router.get("/periodo/:periodo/nrc/:nrc", ctrl.enrolamientoPeriodoNrc)
    this.router.get("/periodo/:periodo/idalumno/:idalumno", ctrl.enrolamientoPeriodoAlumno)
    this.router.get("/periodo/:periodo/nrcs/:nrcs", ctrl.enrolamientoPeriodoNrcs)
    //this.router.get("/periodo/:periodo/nrc/:nrc/rol/:rol", ctrl.enrolamientoPeriodoNrcRol)
    this.router.get('/periodo/:periodo/curso/:idcurso/alumno/:idalumno', ctrl.enrolamientoPeriodoCursoAlumno)
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

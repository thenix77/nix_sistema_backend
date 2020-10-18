import { Router } from "express";
import ctrl from "../controllers/sinfoVMatricula.ctrl";
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
    this.router.get("/idalumno/:idalumno", validationToken, ctrl.idalumno);
    this.router.get("/idcurso/:idcurso", validationToken, ctrl.idcurso);
    this.router.get('/cantidadCursos', ctrl.cantidadCursos)
    this.router.get('/cantidadAlumnos', ctrl.cantidadAlumnos )
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

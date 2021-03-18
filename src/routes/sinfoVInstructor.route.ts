import { Router } from "express";
import ctrl from "../controllers/sinfo/vinstructor.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", ctrl.index)
    this.router.get("/:instructor", ctrl.findxInstructor)
   
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;
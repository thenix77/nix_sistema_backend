import { Router } from "express";
import ctrl from "../controllers/blackboardLC.ctrl";

class Rutas {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
  }

  get() {
    this.router.get("/", ctrl.index);
    this.router.get("/find/:FIND", ctrl.find);
    this.router.get("/lc/:LC", ctrl.findLC);
    this.router.get("/nrc/:NRC", ctrl.findNRC);
  }

  post() {}
}

const rutas = new Rutas();
export default rutas.router;

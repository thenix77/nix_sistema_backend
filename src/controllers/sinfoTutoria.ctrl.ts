import { Request, Response } from "express";
import data from "../data/sinfoTutoria.data";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const tutoria = await data.index();
    return res.status(200).json({length:tutoria.length,data:tutoria});
  }

  async find(req: Request, res: Response): Promise<Response | void> {
    const ID_ALUMNO = req.params.id_alumno;
    const tutoria = await data.find(ID_ALUMNO);
    return res.status(200).json(tutoria);
  }
}

const ctrl = new Ctrl();
export default ctrl;

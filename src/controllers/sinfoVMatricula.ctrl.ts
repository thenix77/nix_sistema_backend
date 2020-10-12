import { Request, Response } from "express";
import data from "../data/sinfoVMatricula.data";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const rst = await data.index();
    return res.status(200).json({ length: rst });
  }

  async idalumno(req: Request, res: Response): Promise<Response | void> {
    const IDALUMNO = req.params.idalumno;
    const rst = await data.idalumno(IDALUMNO);
    return res.status(200).json({ length: rst.length, data: rst });
  }

  async idcurso(req: Request, res: Response): Promise<Response | void> {
    const IDCURSO = req.params.idcurso;

    const rst = await data.idcurso(IDCURSO);
    return res.status(200).json({ length: rst.length, data: rst });
  }
}

const ctrl = new Ctrl();
export default ctrl;

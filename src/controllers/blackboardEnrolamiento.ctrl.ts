import { Request, Response } from "express";
import data from "../data/blackboardEnrolamiento.data";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const rst = await data.index();

    return res.status(200).json({ length: rst.length , data:rst  });
  }


  async enrolamientoPeriodo(req: Request,res: Response): Promise<Response | void> {
    var PERIODO = req.params.periodo;
    
    const rst = await data.EnrolamientoPeriodo(PERIODO);

    return res.status(200).json({ length:rst.length , data:rst });
  }

  async enrolamientoPeriodoCurso(req: Request,res: Response): Promise<Response | void> {
    var PERIODO = req.params.periodo;
    var CURSOID = req.params.cursoid;

    const rst = await data.EnrolamientoPeriodoCurso(PERIODO, CURSOID);

    return res.status(200).json({ length: rst.length, data: rst });
  }

  async enrolamientoPeriodoNrc(req: Request,res: Response): Promise<Response | void> {
    var PERIODO = req.params.periodo;
    var NRC = req.params.nrc;

    const rst = await data.EnrolamientoPeriodoNrc(PERIODO, NRC);

    return res.status(200).json({ length: rst.length, data: rst });
  }
}

const ctrl = new Ctrl();
export default ctrl;

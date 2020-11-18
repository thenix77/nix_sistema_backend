import { Request, Response } from "express";
import data from "../data/blackboardLC.data";
import { IListaCruzada } from "../models/listacruzada.model";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const rst: IListaCruzada[] = await data.index();

    return res.status(200).json({length:rst.length , data: rst});
  }

  async findPeriodo(req: Request, res: Response): Promise<Response | void> {
    const PERIODO: string = req.params.periodo;
    
    const rst = await data.findPeriodo(PERIODO);

    return res.status(200).json({ length:rst.length,data: rst });
  }

  async findPeridoCurso(req: Request, res: Response): Promise<Response | void> {
    const PERIODO: string = req.params.periodo;
    const CURSOID: string = req.params.cursoid;

    const rst = await data.findPeriodoCurso(PERIODO,CURSOID);

    return res.status(200).json({ length:rst.length , data:rst });
  }

  async findPeridoNrc(req: Request, res: Response): Promise<Response | void> {
    const PERIODO: string = req.params.periodo;
    const NRC: string = req.params.nrc;

    const rst = await data.findPeriodoFindNrc(PERIODO,NRC);

    return res.status(200).json({ length:rst.length , data:rst });
  }


}

const ctrl = new Ctrl();
export default ctrl;

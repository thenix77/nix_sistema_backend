import { Request, Response } from "express";
import data from "../data/blackboardLC.data";
import { ILcNrc } from "../models/listacruzada.model";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const lcnrc: ILcNrc[] = await data.index();

    return res.status(200).json(lcnrc);
  }

  async find(req: Request, res: Response): Promise<Response | void> {
    const FIND: string = req.params.FIND;

    const rst = await data.find(FIND);

    return res.status(200).json({ rst });
  }

  async findLC(req: Request, res: Response): Promise<Response | void> {
    const LC: string = req.params.LC;

    const rst = await data.findLC(LC);

    return res.status(200).json({ rst });
  }

  async findNRC(req: Request, res: Response): Promise<Response | void> {
    const NRC: string = req.params.NRC;

    const rst = await data.findNRC(NRC);

    return res.status(200).json({ rst });
  }
}

const ctrl = new Ctrl();
export default ctrl;

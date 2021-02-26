import { Request, Response } from "express";
import data from '../data/blackboardRetiros.data'
import { IRetirados } from "../models/retirados";

class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {
        const PERIODO = req.params.periodo
        const rst:IRetirados[] = await data.index(PERIODO)

        return res.status(200).json({ length:rst.length, data: rst})
    }

}

const ctrl = new Ctrl();
export default ctrl;

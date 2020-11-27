import { Request, Response } from "express";
import data from '../data/sinfoSupervisores.data'

class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {
        const rst = await data.index()
        return res.status(200).json({length:rst.length , data:rst})
    }

}

const ctrl = new Ctrl();
export default ctrl;
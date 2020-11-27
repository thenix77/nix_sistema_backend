import { Request, Response } from "express"
import data from '../data/bbsinfo.data'
import { IBbSinfo } from "../models/bbsinfo.model"

class Ctrl {
    async bbSinfoPeriodo(req: Request, res: Response): Promise<Response | void> {
        const PERIODO = req.params.periodo
        const NRCs = req.params.nrc

        let rst:IBbSinfo[]|void = await data.index(PERIODO,NRCs)

        return res.status(200).json({length:(rst)? rst.length : 0, data: rst})
    }

}

const ctrl = new Ctrl();
export default ctrl;

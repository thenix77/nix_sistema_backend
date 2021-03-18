import { Request, Response } from "express"
import data from '../data/bbsinfo.data'

class Ctrl {
    async findxNrc(req: Request, res: Response): Promise<Response | void> {
        const PERIODO = req.params.periodo
        const NRCs = req.params.nrc

        const rst = await data.findxNrc(PERIODO,NRCs)

        return res.status(200).json({length:rst.length , data: rst})
    }

    async findxAlumno(req: Request, res: Response): Promise<Response | void> {
        const PERIODO = req.params.periodo
        const IDALUMNO = req.params.idalumno

        const rst = await data.findxIdAlumno(PERIODO,IDALUMNO)

        return res.status(200).json({length:rst.length , data: rst})
    }

    async findxRetiro(req: Request, res: Response): Promise<Response | void> {
        const PERIODO = req.params.periodo
        
        const rst = await data.findxRetiro(PERIODO)

        return res.status(200).json({length:rst.length , data: rst})
    }

}

const ctrl = new Ctrl();
export default ctrl;

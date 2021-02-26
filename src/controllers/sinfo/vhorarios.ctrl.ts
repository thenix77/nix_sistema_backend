import { Request, Response } from "express";
import data from '../../data/sinfo/vhorarios.data'

class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {

        const periodo = req.params.periodos

        const rst = await data.index(periodo)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async findxNrc(req: Request, res: Response): Promise<Response | void> {

        const periodo = req.params.periodos
        const nrc = req.params.nrc

        const rst = await data.findxNrc(periodo,nrc)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async findxCurso(req: Request, res: Response): Promise<Response | void> {

        const idCurso = req.params.idCurso

        const rst = await data.findxCurso(idCurso)
        return res.status(200).json({length: rst.length, data: rst})
    }

}

const ctrl = new Ctrl();
export default ctrl;
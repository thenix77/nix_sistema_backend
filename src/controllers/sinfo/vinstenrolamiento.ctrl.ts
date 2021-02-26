import { Request, Response } from "express";
import data from '../../data/sinfo/vinstenrolamiento.data'

class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {
        const periodo = req.params.periodo

        const rst = await data.index(periodo)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async findxInst(req: Request, res: Response): Promise<Response | void> {
        const periodo = req.params.periodo
        const idInst = req.params.idinst

        const rst = await data.findxInst(periodo,idInst)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async findxNrc(req: Request, res: Response): Promise<Response | void> {
        const periodo = req.params.periodo
        const nrc = req.params.nrc

        const rst = await data.findxNrc(periodo,nrc)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async findxCurso(req: Request, res: Response): Promise<Response | void> {
        const idCurso = req.params.idcurso
        
        const rst = await data.findxCurso(idCurso)
        return res.status(200).json({length: rst.length, data: rst})
    }

}

const ctrl = new Ctrl();
export default ctrl;
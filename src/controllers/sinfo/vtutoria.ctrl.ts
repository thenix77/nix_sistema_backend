import { Request, Response } from "express"
import data from '../../data/sinfo/vtutoria.data'


class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {
      
        const periodo = req.params.periodo

        const rst = await data.index(periodo)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async find(req: Request, res: Response): Promise<Response | void> {
         const id_alumno = req.params.id_alumno
         const periodo = req.params.periodo
      
        const rst = await data.find(periodo,id_alumno)
        return res.status(200).json({length: rst.length, data: rst})
    }

}

const ctrl = new Ctrl();
export default ctrl;

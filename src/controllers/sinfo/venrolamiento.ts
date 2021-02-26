import { Request, Response } from "express"
import data from '../../data/sinfo/venrolamiento.data'

class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {
      
        const periodo = req.params.periodo
        const rst = await data.index(periodo)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async BuscarxIdAlumno(req: Request, res: Response): Promise<Response | void> {
        const periodo = req.params.periodo 
        const id_alumno = req.params.idalumno
      
        const rst = await data.BuscarxIdAlumno(periodo,id_alumno)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async BuscarxNrc(req: Request, res: Response): Promise<Response | void> {
        const periodo = req.params.periodo
        const nrc = req.params.nrc
      
        const rst = await data.BuscarxNrc(periodo,nrc)
        return res.status(200).json({length: rst.length, data: rst})
    }
}

const ctrl = new Ctrl();
export default ctrl;

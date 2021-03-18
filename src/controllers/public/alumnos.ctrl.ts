import { Request, Response } from "express"
import data from '../../data/public/alumnos.data'


class Ctrl {
    
    async findxNrc(req: Request, res: Response): Promise<Response | void> {
        const periodo = req.params.periodo
        const nrc = req.params.nrc
      
        const rst = await data.findxNrc(periodo,nrc)
        return res.status(200).json({length: rst.length, data: rst})
    }

    async findxAlumno(req: Request, res: Response): Promise<Response | void> {
        const periodo = req.params.periodo
        const idAlumno = req.params.idalumno
      
        const rst = await data.findxAlumno(periodo,idAlumno)
        return res.status(200).json({length: rst.length, data: rst})
    }


}

const ctrl = new Ctrl();
export default ctrl;
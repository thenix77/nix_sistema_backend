import { Request, Response } from "express"
import data from '../../data/sinfo/vinstructor.data'


class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {
      
        const periodo = req.params.periodo

        const rst = await data.index()
        return res.status(200).json({length: rst.length, data: rst})
    }

    async findxInstructor(req: Request, res: Response): Promise<Response | void> {
        const idInstructor = req.params.instructor
         
        const rst = await data.findxInstructor(idInstructor)
        return res.status(200).json({length: rst.length, data: rst})
    }

}

const ctrl = new Ctrl();
export default ctrl;

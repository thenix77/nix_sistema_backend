import { Request, Response } from "express";
import data from "../data/blackboardEnrolamiento.data";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const rst = await data.index();

    return res.status(200).json({ length: rst.length , data:rst  });
  }


  async enrolamientoCursos(req:Request, res:Response):Promise<Response | void> {
    const cursos = await data.EnrolamientoCurso()

    return res.status(200).json({ length : cursos.length , data:cursos})
    
  }

  async enrolamientoPeriodo(req: Request,res: Response): Promise<Response | void> {
    var PERIODO = req.params.periodo;
    
    const rst = await data.EnrolamientoPeriodo(PERIODO);

    return res.status(200).json({ length:rst.length , data:rst });
  }

  async enrolamientoPeriodoCurso(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    var PERIODO = req.params.periodo;
    var CURSOID = req.params.cursoid;

    const rst = await data.EnrolamientoPeriodoCurso(PERIODO, CURSOID);

    return res.status(200).json({ length: rst.length, data: rst });
  }

  async enrolamientoPeriodoCursoRol(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    var PERIODO = req.params.periodo;
    var CURSOID = req.params.cursoid;
    var ROL = req.params.rol;

    const rst = await data.EnrolamientoPeriodoCursoRol(PERIODO, CURSOID, ROL);

    return res.status(200).json({ length: rst.length, data: rst });
  }
}

const ctrl = new Ctrl();
export default ctrl;

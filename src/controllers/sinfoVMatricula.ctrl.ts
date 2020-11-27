import { Request, Response } from "express";
import data from "../data/sinfoVMatricula.data";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const rst = await data.index();
    return res.status(200).json({ length: rst.length,data:rst });
  }

  async idalumno(req: Request, res: Response): Promise<Response | void> {
    const IDALUMNO = req.params.idalumno;
    const rst = await data.idalumno(IDALUMNO);
    return res.status(200).json({ length: rst.length, data: rst });
  }

  async idcurso(req: Request, res: Response): Promise<Response | void> {
    const IDCURSO = req.params.idcurso;

    const rst = await data.idcurso(IDCURSO);
    return res.status(200).json({ length: rst.length, data: rst });
  }

  async cantidadCursos(req: Request, res: Response): Promise<Response | void> {
   
    const rst = await data.cantidadCursos();
    return res.status(200).json({ length: rst });
  }

  async cantidadAlumnos(req: Request, res: Response): Promise<Response | void> {
   
    const rst = await data.cantidadAlumnos();
    return res.status(200).json({ length: rst });
  }

  async apexMatPeriodNrcs(req: Request, res: Response): Promise<Response | void> {
    const periodo = req.params.periodo
    const nrcs = req.params.nrcs

    const rst = await data.sinfoMatPeriodoNrcs(periodo,nrcs)
    return res.status(200).json({ length: rst.length ,data:rst});
  }

  
}

const ctrl = new Ctrl();
export default ctrl;

import { Request, Response } from "express";
import data from "../data/blackboardCurso.data";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const periodos = await data.index();
    return res.status(200).json({ periodos });
  }

  async cursosPeriodo(req: Request, res: Response): Promise<Response | void> {
    const PERIODO = req.params.periodo;

    const cursos = await data.CursosPeriodo(PERIODO);
    return res.status(200).json({ length: cursos.length, data:cursos });
  }
  
  
  async cursosPeriodoCurso(req: Request,res: Response): Promise<Response | void> {
    const PERIODO = req.params.periodo;
    const CURSO = req.params.curso;

    const cursos = await data.CursosPeriodoCurso(PERIODO, CURSO);
    return res.status(200).json({ length: cursos.length, data:cursos });
  }

  async cursosPeriodoNrc(req: Request, res: Response): Promise<Response | void> {
    const PERIODO = req.params.periodo;
    const NRC = req.params.nrc;
    
    
    const cursos = await data.CursosPeriodoNrc(PERIODO,NRC);
    return res.status(200).json({ length: cursos.length, cursos });
  }


 
}

const ctrl = new Ctrl();
export default ctrl;

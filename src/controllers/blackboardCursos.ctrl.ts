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
    return res.status(200).json({ length: cursos.length, cursos });
  }

  async cursosPeriodoCurso(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    const PERIODO = req.params.periodo;
    const CURSO = req.params.curso;

    const cursos = await data.CursosPeriodoCurso(PERIODO, CURSO);
    return res.status(200).json({ length: cursos.length, cursos });
  }

  async cursosFind(req: Request, res: Response): Promise<Response | void> {
    const CURSO = req.params.curso;
    console.log(CURSO);
    const cursos = await data.CursosFind(CURSO);
    return res.status(200).json({ length: cursos.length, cursos });
  }

 async cantidadCursos(req: Request, res: Response): Promise<Response | void> {
   
   const length = await data.cantidadCursos()
   
   
    return res.status(200).json({ length });
  }

  async cantidadAlumnos(req: Request, res: Response): Promise<Response | void> {
   
   const length = await data.cantidadAlumnos()
   
   
    return res.status(200).json({ length });
  }

}

const ctrl = new Ctrl();
export default ctrl;

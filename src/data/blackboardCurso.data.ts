import { dbSinfo, dbBlackBoard } from "../database/conection";
import { ICursos } from "../models/cursos.model";
import { ITerm } from "../models/Term.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private cursos: ICursos[] = [];
  private term: ITerm[] = [];

  async CursosBB() {
    const ssql =`select * from bb.cursos_enrolados`
    
    const { rows } = await this.dbBlackBoard.query(ssql);

    this.cursos = rows;
    return this.cursos;
  }

  async index(): Promise<ICursos[]> {
    
    const cursos = await this.CursosBB()

    return cursos
  }

  async CursosPeriodo(PERIODO: string) {
    await this.CursosBB();
    const rst: ICursos[] = this.cursos.filter(
      (data) => data.periodo === PERIODO
    );

    return rst;
  }

  async CursosPeriodoCurso(PERIODO: string, CURSOID: string) {
    await this.CursosBB();
    const rst: ICursos[] = this.cursos
      .filter((data) => data.periodo === PERIODO)
      .filter((data) => data.course_id === CURSOID.toUpperCase());

    return rst;
  }

  async CursosPeriodoNrc(PERIODO:string,NRC: string) {
    await this.CursosBB();

    const rst: ICursos[] = this.cursos.filter(curso => curso.periodo === PERIODO)
      .filter((curso) =>
        curso.course_id.substring(curso.course_id.indexOf('_') + 1, curso.course_id.length) === NRC )
    
    return rst;
  }


 
}

const data = new Data();
export default data;

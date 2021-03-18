import { dbSinfo, dbBlackBoard } from "../database/conection";
import { ICursos } from "../models/cursos.model";
import { ITerm } from "../models/Term.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private cursos: ICursos[] = [];

  private ssql:string =`select * 
                         from bb.cursos_enrolados`

  private generaIn(dato:string){
    let values = []
    let newDato = dato.split(',')
    var setvs = (vs:string[]) => vs.map((v:string) => '$' + (values.push(v))).join();

    return setvs(newDato)
  }

  async CursosBB() {
    const ssql =`select * 
                  from bb.cursos_enrolados`
    
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

  async CursosPeriodoNrc(periodo:string,nrcs: string) {
    
    const ssql = this.ssql+
                     " where  "+
                     "       periodo like '"+ periodo+"' "+
                     "       and substring(course_id ,position('_' in course_id) +1 , length(course_id)) in (" + this.generaIn(nrcs) + ") "+
                   //  "        and usuariovisible like 'Y' "
                     " order by course_id"

   
    const { rows}= await this.dbSinfo.query(ssql, nrcs.split(','))  

    return rows
  }


 
}

const data = new Data();
export default data;

import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IListaCruzada } from "../models/listacruzada.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private listacruzadas: IListaCruzada[] = [];

  private async ListaCruzada() {
     const ssql = `
                  select  ce.course_id ,ce.periodo ,l.padre ,course_name 
                  from bb.cursos_enrolados ce 
                  inner join bb.listacruzada l  on l.hijo = ce.course_id`;

    const { rows } = await this.dbBlackBoard.query(ssql);
    
    return this.listacruzadas = rows;
    
  }
  
  
  async index(): Promise<IListaCruzada[]> {
   
    return await this.ListaCruzada();
  }

  async findPeriodo(PERIODO:string): Promise<IListaCruzada[]> {
    await this.ListaCruzada()

    const rst: IListaCruzada[] = this.listacruzadas.filter(lc => lc.periodo === PERIODO)

      return rst
  }

   async findPeriodoCurso(PERIODO:string ,CURSOID: string) {
    this.listacruzadas = await this.index();

   
    return this.listacruzadas.filter(lc => lc.periodo === PERIODO)
                            .filter(lc => lc.course_id === CURSOID)
  }

  async findPeriodoFindNrc(PERIODO: string, NRC: string) {
    this.listacruzadas = await this.index()

    return this.listacruzadas.filter(lc => lc.periodo === PERIODO)
                            .filter(curso => curso.course_id.substring(curso.course_id.indexOf('_') + 1, curso.course_id.length) === NRC )
  }

  async findPeriodoListaCruzada(PERIODO:string ,LC: string) {
    this.listacruzadas = await this.index();

   
    return this.listacruzadas.filter(lc => lc.periodo === PERIODO)
                            .filter(lc => lc.padre === LC)
  }

  
}

const data = new Data();
export default data;

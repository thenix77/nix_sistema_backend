import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IListaCruzada } from "../models/listacruzada.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private listacruzadas: IListaCruzada[] = [];

  private async ListaCruzada() {
     const ssql = `select  * from vlcruzada`;

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
                            .filter(lc => lc.cursoid === CURSOID)
  }

  async findPeriodoFindNrc(PERIODO: string, NRC: string) {
    this.listacruzadas = await this.index()

    return this.listacruzadas.filter(lc => lc.periodo === PERIODO)
                            .filter(curso => curso.cursoid.substring(curso.cursoid.indexOf('_') + 1, curso.cursoid.length) === NRC )
  }

  async findPeriodoListaCruzada(PERIODO:string ,LC: string) {
    this.listacruzadas = await this.index();

   
    return this.listacruzadas.filter(lc => lc.periodo === PERIODO)
                            .filter(lc => lc.lc_curso === LC)
  }

  
}

const data = new Data();
export default data;

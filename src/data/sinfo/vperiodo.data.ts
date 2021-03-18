import { dbSinfo, dbBlackBoard } from "../../database/conection";
import { ISinfoPeriodo } from "../../models/sinfo/periodo.model";



class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();

  private async consulta(){
    const ssql = 'select distinct * from sinfo.vperiodos'
      const { rows}= await this.dbSinfo.query(ssql)
    return rows;
  }
 

  async index():Promise<ISinfoPeriodo[]>  {
    
      const rst:ISinfoPeriodo[] = await this.consulta()
      
    return rst;
    }
    
}

const data = new Data();
export default data;
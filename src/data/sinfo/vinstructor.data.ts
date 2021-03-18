import { dbSinfo, dbBlackBoard } from "../../database/conection";
import { ISinfoInstructor } from "../../models/sinfo/instructor.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();

  private async consulta(){
    const ssql = 'select distinct * from sinfo.vinstructores'
      const { rows}= await this.dbSinfo.query(ssql)
    return rows;
  }
 

  async index():Promise<ISinfoInstructor[]>  {
    
      const rst:ISinfoInstructor[] = await this.consulta()
      
    return rst;
    }
    
    async findxInstructor(idInstructor:string):Promise<ISinfoInstructor[]> {
    
        const ssql:ISinfoInstructor[] = await this.consulta()
        const rst:ISinfoInstructor[] = ssql
              .filter((i:ISinfoInstructor)=> i.id_inst === idInstructor)
    return rst;
  }
}

const data = new Data();
export default data;
import { dbSinfo, dbBlackBoard } from "../../database/conection";
import { ISinfoTutoria } from "../../models/sinfo/tutoria.model";


class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();

  private async consulta():Promise<ISinfoTutoria[]>{
    const ssql = 'select  * '+ 
                 '  from sinfo.vtutorias'
      const { rows} = await this.dbSinfo.query(ssql) 

    return rows  ;
  }

 

  async index(periodo:string):Promise<ISinfoTutoria[]> {
    
    const ssql:ISinfoTutoria[] = await this.consulta()
    const rst:ISinfoTutoria[] = ssql.filter((t:ISinfoTutoria)=> t.periodo === periodo)
    return rst
    }
    
    async find(periodo:string ,id_alumno: string) {
    
        const ssql:ISinfoTutoria[] = await this.consulta()
        const rst:ISinfoTutoria[] = ssql.filter((t:ISinfoTutoria) => t.pk1 === periodo+'-'+id_alumno)
    return rst;
  }
}

const data = new Data();
export default data;
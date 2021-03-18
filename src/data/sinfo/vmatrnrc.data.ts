import { dbSinfo, dbBlackBoard } from "../../database/conection";
import { ISinfoMatrNrc } from "../../models/sinfo/matrnrc.model";



class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();

  private async consulta():Promise<ISinfoMatrNrc[]>{
    const ssql = 'select * from sinfo.vmatrnrc'
      const { rows}= await this.dbSinfo.query(ssql)
    return rows;
  }
 

  async index(periodo:string):Promise<ISinfoMatrNrc[]> {
    
      const ssql:ISinfoMatrNrc[] = await this.consulta()
      const rst:ISinfoMatrNrc[] = ssql.filter((c)=> c.periodo === periodo)
    return rst;
    }
    
  async findxNrc(periodo:string,nrc: string):Promise<ISinfoMatrNrc[]> {
    
        const ssql:ISinfoMatrNrc[] = await this.consulta()
        const rst:ISinfoMatrNrc[] = ssql
              .filter((c:ISinfoMatrNrc)=> c.pk2 === periodo +'-'+nrc)
    return rst;
  }

  async findxIdAlumno(periodo:string,idAlumno: string):Promise<ISinfoMatrNrc[]> {
    
      const ssql:ISinfoMatrNrc[] = await this.consulta()
      const rst:ISinfoMatrNrc[] = ssql
            .filter((c:ISinfoMatrNrc)=> c.pk1 === periodo +'-'+idAlumno)
  return rst;
  }

}

const data = new Data();
export default data;
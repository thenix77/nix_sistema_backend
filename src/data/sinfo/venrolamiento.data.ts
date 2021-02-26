import { dbSinfo, dbBlackBoard } from "../../database/conection";
import { ISinfoEnrolamiento } from "../../models/sinfo/enrolamiento.model";


class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
 
  private async consulta():Promise<ISinfoEnrolamiento[]> {
    
    const ssql = 'select  * '+ 
                 '  from sinfo.venrolamiento'
      const { rows}= await this.dbSinfo.query(ssql)
      return rows;
    }


  async index(periodo:string):Promise<ISinfoEnrolamiento[]> {
    
    const ssql = await this.consulta()
    const rst = ssql.filter((e:ISinfoEnrolamiento) => e.periodo === periodo )
    return rst;
  }
    
    async BuscarxIdAlumno(periodo:string,id_alumno: string):Promise<ISinfoEnrolamiento[]> {
    
      const ssql = await this.consulta()
      const rst = ssql.filter((e:ISinfoEnrolamiento) => e.id_alumno  === id_alumno && e.periodo === periodo)
        
    return rst;
  }

  async BuscarxNrc(periodo:string ,nrc: string):Promise<ISinfoEnrolamiento[]> {
    
      const ssql = await this.consulta()
      const rst = ssql.filter((e:ISinfoEnrolamiento) => e.nrc === nrc && e.periodo === periodo)
        
    return rst;
  }
}

const data = new Data();
export default data;
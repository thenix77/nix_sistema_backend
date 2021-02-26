import { dbSinfo, dbBlackBoard } from "../../database/conection";
import { ISinfoInstEnrolamiento } from "../../models/sinfo/instenrolamiento.model";



class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();

  private async consulta():Promise<ISinfoInstEnrolamiento[]>{
    const ssql = 'select * from sinfo.vinstenrolamiento'
      const { rows}= await this.dbSinfo.query(ssql)
    return rows;
  }
 

    async index(periodo:string):Promise<ISinfoInstEnrolamiento[]>  {
    
      const ssql:ISinfoInstEnrolamiento[] = await this.consulta()
      const rst:ISinfoInstEnrolamiento[] = ssql.filter((c)=> c.periodo === periodo)
    return rst;
    }
    
    async findxInst(periodo:string,idInst: string):Promise<ISinfoInstEnrolamiento[]> {
    
        const ssql:ISinfoInstEnrolamiento[] = await this.consulta()
        const rst:ISinfoInstEnrolamiento[] = ssql
              .filter((c:ISinfoInstEnrolamiento)=> c.periodo === periodo)
              .filter((c:ISinfoInstEnrolamiento)=> c.id_inst === idInst)
    return rst;
    }

    async findxNrc(periodo:string,nrc: string):Promise<ISinfoInstEnrolamiento[]> {
    
        const ssql:ISinfoInstEnrolamiento[] = await this.consulta()
        const rst:ISinfoInstEnrolamiento[] = ssql
              .filter((c:ISinfoInstEnrolamiento)=> c.periodo === periodo)
              .filter((c:ISinfoInstEnrolamiento)=> c.nrc === nrc)
    return rst;
    }

    async findxCurso(idCurso: string):Promise<ISinfoInstEnrolamiento[]> {
    
        const ssql:ISinfoInstEnrolamiento[] = await this.consulta()
        const rst:ISinfoInstEnrolamiento[] = ssql
              .filter((c:ISinfoInstEnrolamiento)=> c.id_curso === idCurso)
    return rst;
    }

}

const data = new Data();
export default data;
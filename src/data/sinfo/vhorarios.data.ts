import { dbSinfo, dbBlackBoard } from "../../database/conection";
import { ISinfoHorarios } from "../../models/sinfo/horarios.model";



class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();

  private async consulta():Promise<ISinfoHorarios[]>{
    const ssql = 'select * from sinfo.vhorarios'
    const { rows} = await this.dbSinfo.query(ssql) 

    return rows;
  }

  async index(periodo:string):Promise<ISinfoHorarios[]>{
    const ssql:ISinfoHorarios[] = await this.consulta()
    const rst:ISinfoHorarios[] = ssql.filter((h:ISinfoHorarios) => h.periodo === periodo)

    return rst
  }

  async findxNrc(periodo:string, nrc:string):Promise<ISinfoHorarios[]>{
    const ssql:ISinfoHorarios[] = await this.consulta()
    const rst:ISinfoHorarios[] = ssql.filter((h:ISinfoHorarios) => h.pk1 === periodo +'-'+nrc )

    return rst
  }

}

const data = new Data();
export default data;
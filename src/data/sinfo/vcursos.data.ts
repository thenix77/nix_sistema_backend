import { dbSinfo, dbBlackBoard } from "../../database/conection";
import { ISinfoCursos } from "../../models/sinfo/cursos.model";


class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();

  private async consulta(){
    const ssql = 'select distinct * from sinfo.vcursos'
      const { rows}= await this.dbSinfo.query(ssql)
    return rows;
  }
 

  async index(periodo:string):Promise<ISinfoCursos[]>  {
    
      const ssql:ISinfoCursos[] = await this.consulta()
      const rst:ISinfoCursos[] = ssql.filter((c)=> c.periodo === periodo)
    return rst;
    }
    
    async findxNrc(periodo:string,nrc: string):Promise<ISinfoCursos[]> {
    
        const ssql:ISinfoCursos[] = await this.consulta()
        const rst:ISinfoCursos[] = ssql
              .filter((c:ISinfoCursos)=> c.pk1 === periodo +'-'+nrc)
    return rst;
  }

    async findxCurso(idCurso: string):Promise<ISinfoCursos[]> {
      
        const ssql:ISinfoCursos[] = await this.consulta()
        const rst:ISinfoCursos[]  = ssql.filter((c:ISinfoCursos)=> c.id_curso === idCurso)
    return rst;
  }



}

const data = new Data();
export default data;
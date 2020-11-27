import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IEnrolamiento } from "../models/enrolamiento.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private enrolamiento: IEnrolamiento[] = [];
 
  async Enrolamiento():Promise<IEnrolamiento[]> {
     const ssql = `select * from bb.vmatbb`
	                

    const { rows } = await this.dbBlackBoard.query(ssql);

    this.enrolamiento = rows;
    return this.enrolamiento;
  }

  private async consulta(periodo: string, nrcs: string): Promise<IEnrolamiento[] | void> {
        let values = []
        let newNrcs = nrcs.split(',')
        var setvs = (vs:string[]) => vs.map((v:string) => '$' + (values.push(v))).join();
        
        
        const ssql = "select * "+
                     "from bb.vmatbb"+
                     " where "+
                     "       periodo like '"+ periodo+"' and "+
                     "       nrc in (" + setvs(newNrcs) + ")"
         
        const { rows}= await this.dbSinfo.query(ssql,newNrcs)  

        return rows
    }

  async index(): Promise<IEnrolamiento[]> {
   
    return  await this.Enrolamiento()
  }

  async EnrolamientoPeriodo(PERIODO: string) {
   
    let enrolamientos = await this.Enrolamiento()

    return enrolamientos.filter(rs => rs.periodo === PERIODO)
  }

  async EnrolamientoPeriodoCurso(PERIODO: string, CURSOID: string) {
    
    await this.Enrolamiento()

    const rst: IEnrolamiento[] = this.enrolamiento
      .filter((dato) => dato.periodo === PERIODO)
      .filter((dato) => dato.course_id === CURSOID);

    return rst;
  }

  async EnrolamientoPeriodoNrc(PERIODO: string,NRC: string) {
    await this.Enrolamiento();

    const rst: IEnrolamiento[] = await this.enrolamiento
      .filter((dato) => dato.periodo === PERIODO)
      .filter((curso) => curso.course_id.substring(curso.course_id.indexOf('_') + 1, curso.course_id.length) === NRC )
      
    return rst;
  }

  async EnrolamientoPeriodoNrcs(PERIODO: string,NRCs: string):Promise<IEnrolamiento[]|void> {
    
    return await this.consulta(PERIODO,NRCs) 
  
  }

  async enrolamientoPeriodoNrcRol(PERIODO: string,NRC: string, ROL:string) {
    await this.Enrolamiento();

    const rst: IEnrolamiento[] = await this.enrolamiento
      .filter((dato) => dato.periodo === PERIODO)
      .filter( dato => dato.role.toUpperCase() === ROL.toUpperCase())
      .filter((curso) => curso.nrc === NRC)
      
     return rst;
  }

}

const data = new Data();
export default data;

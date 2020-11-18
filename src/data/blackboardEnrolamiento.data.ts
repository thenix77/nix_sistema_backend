import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IEnrolamiento } from "../models/enrolamiento.model";
import { ITerm } from "../models/Term.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private enrolamiento: IEnrolamiento[] = [];
  private term: ITerm[] = [];

  async Enrolamiento():Promise<IEnrolamiento[]> {
     const ssql = `select u.batch_uid ,u.email ,u.lastname ,u.firstname ,u.visible habilitado,e.visible visible,
                          ce.course_id ,ce.course_name , ce.periodo 
                    from bb.enrolamientos e 
                      inner join bb.usuarios u on u.pk1  = e.users_pk1 
                      inner join bb.cursos_enrolados ce on  ce.pk1 = e.curso_hijo_pk1 
                    where 
                    COURSE_ID NOT LIKE 'PATRON-%' AND 
                    COURSE_ID NOT LIKE 'PARCHE-%' AND 
                    COURSE_ID NOT LIKE '%INDUCCI%' AND 
                    COURSE_ID NOT LIKE '%-LC_%' AND 
                    COURSE_ID LIKE '%-NRC_%' AND 
                    U.batch_uid NOT LIKE '%_previewuser%' AND 
                    e.tipo in ('S','BB_FACILITATOR','Sup' )`
	                

    const { rows } = await this.dbBlackBoard.query(ssql);

    this.enrolamiento = rows;
    return this.enrolamiento;
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

}

const data = new Data();
export default data;

import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IEnrolamiento } from "../models/enrolamiento.model";
import { ITerm } from "../models/Term.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private enrolamiento: IEnrolamiento[] = [];
  private term: ITerm[] = [];

  async Enrolamiento() {
    const ssql =
      "SELECT  u.batch_uid,u.user_id, u.firstname, u.lastname, u.student_id, u.email, cm.course_id, tr.sourcedid_id, cc.Role, u.row_status " +
      "from course_users cc " +
      "inner join Users U on cc.users_pk1 = U.pk1 " +
      "inner join Course_main cm on cc.crsmain_pk1 = cm.pk1 " +
      "inner join course_term ct on ct.crsmain_pk1 = cm.pk1 " +
      "inner join term tr on tr.pk1=ct.term_pk1 " +
      "where COURSE_ID NOT LIKE 'PATRON-%' AND COURSE_ID NOT LIKE '%INDUCCI%' AND u.batch_uid NOT LIKE '%_previewuser%' " +
      "AND COURSE_ID NOT LIKE '%-LC_%'  " +
      "order by cc.users_pk1;";

    const { rows } = await this.dbBlackBoard.query(ssql);

    this.enrolamiento = rows;
    return this.enrolamiento;
  }

  async index(): Promise<IEnrolamiento[]> {
    const ssql =
      "SELECT name,sourcedid_id,start_date,end_date " +
      "from  term " +
      "where available_ind like 'Y'";

    const { rows } = await this.dbBlackBoard.query(ssql);

    return (this.term = rows);
  }

  async EnrolamientoPeriodo(PERIODO: string) {
    await this.Enrolamiento();

    const rst: IEnrolamiento[] = this.enrolamiento.filter(
      (dato) => dato.sourcedid_id === PERIODO
    );

    return rst.slice(0, 10);
  }

  async EnrolamientoPeriodoCurso(PERIODO: string, CURSOID: string) {
    await this.Enrolamiento();

    const rst: IEnrolamiento[] = this.enrolamiento
      .filter((dato) => dato.sourcedid_id === PERIODO)
      .filter((dato) => dato.course_id.includes(CURSOID.toUpperCase()));

    return rst;
  }
  async EnrolamientoPeriodoCursoRol(
    PERIODO: string,
    CURSOID: string,
    ROL: string
  ) {
    await this.Enrolamiento();

    const rst: IEnrolamiento[] = await this.enrolamiento
      .filter((dato) => dato.sourcedid_id === PERIODO)
      .filter((dato) => dato.course_id.includes(CURSOID.toUpperCase()))
      .filter((dato) => dato.role.toUpperCase() === ROL.toUpperCase());
    return rst;
  }

  async EnrolamientoCurso() {
    const ssql = `SELECT  u.batch_uid,cm.course_id, tr.sourcedid_id, cc.Role, u.row_status 
                      from course_users cc
                      inner join Users U on cc.users_pk1 = U.pk1
                      inner join Course_main cm on cc.crsmain_pk1 = cm.pk1
                      inner join course_term ct on ct.crsmain_pk1 = cm.pk1
                      inner join term tr on tr.pk1=ct.term_pk1
                      where 
                        COURSE_ID NOT LIKE 'PATRON-%' AND 
                        COURSE_ID NOT LIKE 'PARCHE-%' AND 
                        COURSE_ID NOT LIKE '%INDUCCI%' AND 
                        COURSE_ID NOT LIKE '%-LC_%' AND 
                        COURSE_ID LIKE '202020%' AND
                        u.batch_uid NOT LIKE '%_previewuser%' 
                      order by cc.users_pk1`
    
    const { rows } = await this.dbBlackBoard.query(ssql)
    
    return rows
    
  }

}

const data = new Data();
export default data;

import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IRetirados } from "../models/retirados";


class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();
 
    private async consulta(periodo:string):Promise<IRetirados[]> {
        const ssql = `select  r.id_alumno , bb.course_id ,fretiro ,r.nombre ,
                        concat('USUARIO_PATCH-VisibleYN $token $URL_sitio externalId:',r.id_alumno ,' No') scriptAlumno, 
                        concat('ENROLAMIENTO_PATCH-Visibilidad $token $URL_sitio courseId:',bb.course_id ,' externalId:',bb.batch_uid ,' No') scriptCurso 
                        from sinfo.vretirados r 
                        inner join bb.vmatbb bb on bb.batch_uid = r.id_alumno 
                        where 	
                            bb."role" ='S' and 
                            --extract (month from r.fretiro) = extract (month from now())  and 
                            extract (month from r.fretiro) > 7  and
                            bb.usuariovisiblecurso like 'Y' 
                            and bb.periodo like $1`
        
        const { rows } = await this.dbBlackBoard.query(ssql,[periodo]);
        
        return rows
    }

    async index(PERIODO:string):Promise<IRetirados[]>{
        return await this.consulta(PERIODO);
    }
}
const data = new Data();
export default data;
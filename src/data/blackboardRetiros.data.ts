import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IEnrolamiento } from "../models/enrolamiento.model";

class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();
 
    private async consulta(periodo:string):Promise<IEnrolamiento[]> {
        const ssql = `select *
                        from bb.vmatbb v 
                        where
                            v.batch_uid in (select vr.id_alumno from vretirados vr where vr.periodo = '${periodo}') and
                            v.periodo = '${periodo}' and v.role like 'S'`
        
        const { rows } = await this.dbBlackBoard.query(ssql);
        
        return rows
    }

    async index(PERIODO:string):Promise<IEnrolamiento[]>{
        return await this.consulta(PERIODO);
    }
}
const data = new Data();
export default data;